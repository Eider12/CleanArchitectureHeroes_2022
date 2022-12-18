import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/core/domain/Heroes/heroes.model';
import { UseCase } from '../base/use-case';
import { UseCaseTwo } from '../base/use-case-two';
import { HeroesRepository } from '../repositories/heroes.repositories';


@Injectable({
    providedIn: 'root'
})



export class BuscarHeroeUseCase implements UseCase<string, Heroe> {

    constructor( private heroesRepository:  HeroesRepository){}

    execute(params: string): Observable<Heroe[]> {
        return this.heroesRepository.getSuegerencias(params);
    }
}