import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UseCaseTwo } from '../base/use-case-two';
import { Heroe } from '../domain/Heroes/heroes.model';
import { HeroesRepository } from '../repositories/heroes.repositories';


@Injectable({
    providedIn: 'root'
})


export class AddHeroeUseCase implements UseCaseTwo<Heroe, Heroe> {

    constructor( private heroesRepository:  HeroesRepository){}

    execute(params: Heroe): Observable<Heroe> {
        return this.heroesRepository.agregarHeroe(params);
    }
}