import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BuscarHeroeUseCase } from '../../../../domain/usecases/buscar-heroe.usecase';
import { GetHeroePorIdUseCase } from '../../../../domain/usecases/get-heroe-por-id.usecase';
import { Heroe } from '../../../../domain/models/Heroes/heroes.model';
// import { BuscarHeroeUseCase } from 'src/app/core/usecases/buscar-heroe.usecase';
// import { GetHeroePorIdUseCase } from 'src/app/core/usecases/get-heroe-por-id.usecase';
// import { Heroe } from 'src/app/core/domain/Heroes/heroes.model';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe | undefined;

  constructor( private buscarHeroe: BuscarHeroeUseCase, private getHeroePorId: GetHeroePorIdUseCase) { }

  ngOnInit(): void {
  }

  buscando(){
    this.buscarHeroe.execute(this.termino.trim())
    // this.heroeService.getSugerencias( this.termino.trim() )
          .subscribe( heroes => {
            this.heroes = heroes;
          });
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if( !event.option.value ) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    
    this.getHeroePorId.execute(heroe.id!)
    // this.heroeService.getHeroePorId( heroe.id! )
          .subscribe( heroe => {
            this.heroeSeleccionado = heroe;
          });
    
  }

}
