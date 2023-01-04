import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Publisher } from '../../../../domain/models/Publisher/publisher.model';
import { ActualizarHeroeUseCase } from '../../../../domain/usecases/actualizar-heroe.usecase';
import { AddHeroeUseCase } from '../../../../domain/usecases/add-heroe.usecase';
import { DeleteHeroeUseCase } from '../../../../domain/usecases/delete-heroe.usecase';
import { GetHeroePorIdUseCase } from '../../../../domain/usecases/get-heroe-por-id.usecase';
import { Heroe } from '../../../../domain/models/Heroes/heroes.model';

// import { Publisher } from 'src/app/core/domain/Publisher/publisher.model';
// import { ActualizarHeroeUseCase } from 'src/app/core/usecases/actualizar-heroe.usecase';
// import { AddHeroeUseCase } from 'src/app/core/usecases/add-heroe.usecase';
// import { DeleteHeroeUseCase } from 'src/app/core/usecases/delete-heroe.usecase';
// import { GetHeroePorIdUseCase } from 'src/app/core/usecases/get-heroe-por-id.usecase';
// import { Heroe } from '../../../../core/domain/Heroes/heroes.model';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  // constructor( private heroesService: HeroesService,
    constructor( private addHeroeUseCase: AddHeroeUseCase,
                private getHeroePorIdUseCase: GetHeroePorIdUseCase,
                private actualizarHeroeUseCase: ActualizarHeroeUseCase,
                private deleteHeroeUseCase: DeleteHeroeUseCase,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackbar: MatSnackBar,
               public dialog: MatDialog) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
          // .pipe(
          //   switchMap( ({id}) => this.getHeroePorIdUseCase.execute(id)
          // )
          // .subscribe( heroe => this.heroe = heroe);

    this.activatedRoute.params
          .subscribe( ({id}) => {
            this.getHeroePorIdUseCase.execute(id)
                .subscribe( heroe => {
                  this.heroe = heroe;
                });
          });

    // this.activatedRoute.params
    //       .subscribe( ({id}) => {
    //         this.heroesService.getHeroePorId( id )
    //             .subscribe( heroe => {
    //               this.heroe = heroe;
    //             });
    //       });
  }



  guardar() {

    if( this.heroe.superhero.trim().length === 0 ) {
      return;
    }

    if( this.heroe.id ) {
      // Actualizar
      this.actualizarHeroeUseCase.execute(this.heroe)
      // this.heroesService.actualizarHeroe( this.heroe )
          .subscribe( heroe => {
            console.log('Actualizando', heroe);
            this.mostrarSnakbar('Registro actualizado');
          });
    } else {
      // Crear
      this.addHeroeUseCase.execute(this.heroe)
      // this.heroesService.agregarHeroe( this.heroe )
            .subscribe( heroe => {
              this.router.navigate(['/heroe/editar', heroe.id])
              this.mostrarSnakbar('Registro creado');
            });
    }
  }


  borrarHeroe() {

    const dialog = this.dialog.open( ConfirmarComponent, {
      width: '350px',
      data: this.heroe
      //data: { ...this.heroe } // para pasar y no correr el riesgo de cambiar datos, xq jc pasa por referencia
    });

    dialog.afterClosed().subscribe( result => {
      if( result ) {
        this.deleteHeroeUseCase.execute(this.heroe.id!)
        // this.heroesService.deleteHeroe( this.heroe.id! )
              .subscribe( resp => {
                this.router.navigate(['/heroe']); 
              });
      }
    });

  }


  mostrarSnakbar( mensaje: string ) {
    this.snackbar.open( mensaje, 'ok!', {
      duration: 2500
    });
  }

}
