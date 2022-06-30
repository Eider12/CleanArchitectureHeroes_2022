import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
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

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private snackbar: MatSnackBar,
               public dialog: MatDialog) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
          .pipe(
            switchMap( ({id}) => this.heroesService.getHeroePorId( id ))
          )
          .subscribe( heroe => this.heroe = heroe);

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
      this.heroesService.actualizarHeroe( this.heroe )
          .subscribe( heroe => {
            console.log('Actualizando', heroe);
            this.mostrarSnakbar('Registro actualizado');
          });
    } else {
      // Crear
      this.heroesService.agregarHeroe( this.heroe )
            .subscribe( heroe => {
              this.router.navigate(['/heroes/editar', heroe.id])
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
        this.heroesService.deleteHeroe( this.heroe.id! )
              .subscribe( resp => {
                this.router.navigate(['/heroes']); 
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
