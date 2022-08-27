import { Injectable, Pipe } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( private authService: AuthService,
                private router: Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {

      return this.authService.verificaAutenticacion()
        .pipe(
          tap( estaAutenticado => {
            if( !estaAutenticado ) {
              this.router.navigate(['/auth/login']);
            }
          })
        );
      
    //   if( this.authService.auth.id){
    //     return true;
    //   }
     
    // console.log('BLOQUEADO por CanActivate');
    // return false;
  }



  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

      return this.authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ) {
            this.router.navigate(['/auth/login']);
          }
        })
      );

    // if( this.authService.auth.id){
    //   return true;
    // }
     
    // console.log('BLOQUEADO por CanLoad');
    // return false;
  }

}


// canload: Solamente evita que se cargue un modulo, es decir que si previamente ya se habia cargado
// un modulo, se va poder ingresar a dicho modulo de alguna manera.