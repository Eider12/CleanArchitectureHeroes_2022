import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { UseCaseTwo } from '../../base/use-case-two';
import { Heroe } from '../models/Heroes/heroes.model';
import { HeroesRepository } from '../repositories/heroes.repositories';



@Injectable({
    providedIn: 'root'
})


export class GetHeroePorIdUseCase implements UseCaseTwo<string, Heroe> {

    constructor( private heroesRepository:  HeroesRepository){}

    execute(params: string): Observable<Heroe> {
        return this.heroesRepository.getHeroePorId(params);
    }
}