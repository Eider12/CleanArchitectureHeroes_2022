import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../../../domain/models/Heroes/heroes.model';
// import { Heroe } from 'src/app/core/domain/Heroes/heroes.model';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss']
})
export class HeroeTarjetaComponent implements OnInit {

  // @Input() heroe!: Heroe;
  @Input() heroe: Heroe[] = [];

  constructor() { }

  ngOnInit(): void {
       
  }

  // getalgo( log: Heroe ){
  //   return `assets/heroes/${ log.id }.jpg`;
  // }

}
