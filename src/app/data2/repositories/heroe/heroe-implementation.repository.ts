import { Observable } from 'rxjs';
import { Heroe } from '../../../domain/models/Heroes/heroes.model';
import { HeroesRepository } from '../../../domain/repositories/heroes.repositories';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';






@Injectable({
    providedIn: 'root',
})

export class HeroeImplementationRepository extends HeroesRepository {

    private baseUrl: string = 'http://localhost:3000';

    constructor( private http: HttpClient) {
        super();
    }

    getHeroes(): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
    }
    getHeroePorId(id: string): Observable<Heroe> {
        return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`);
        // throw new Error('Method not implemented.');
    }
    getSugerencias(termino: string): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
        // throw new Error('Method not implemented.');
    }
    agregarHeroe(heroe: Heroe): Observable<Heroe> {
        return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe);
        // throw new Error('Method not implemented.');
    }
    actualizarHeroe(heroe: Heroe): Observable<Heroe> {
        return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe);
        // throw new Error('Method not implemented.');
    }
    deleteHeroe(id: string): Observable<any> {
        return this.http.delete<any>(`${ this.baseUrl }/heroes/${ id }`);
        // throw new Error('Method not implemented.');
    }

}