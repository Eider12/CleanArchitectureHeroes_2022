import { Component, OnInit } from '@angular/core';
import { GetHeroesUseCase } from '../../../../domain/usecases/get-heroes.usecase'
import { Heroe } from '../../../../domain/models/Heroes/heroes.model'
// import { GetHeroesUseCase } from 'src/app/core/usecases/get-heroes.usecase';
// import { Heroe } from '../../../../core/domain/Heroes/heroes.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private getHeroesUseCase: GetHeroesUseCase) { }

  ngOnInit(): void {
    console.log('1');
    
    this.getHeroesUseCase.execute()
        .subscribe((value: Heroe[]) => {
          console.log(value);
          this.heroes = value;
        });
  }

}
