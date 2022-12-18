import { Component, OnInit } from '@angular/core';
import { GetHeroesUseCase } from 'src/app/core/usecases/get-heroes.usecase';
import { Heroe } from '../../../../core/domain/Heroes/heroes.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private getHeroesUseCase: GetHeroesUseCase) { }

  ngOnInit(): void {
    this.getHeroesUseCase.execute()
        .subscribe((value: Heroe[]) => {
          console.log(value);
          this.heroes = value;
        });
  }

}
