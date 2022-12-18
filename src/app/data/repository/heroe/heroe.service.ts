import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/core/domain/Heroes/heroes.model';
import { HeroesRepository } from 'src/app/core/repositories/heroes.repositories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroeService extends HeroesRepository {

  // private baseUrl: string = environment.baseUrl;
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    super();
  }

  getHeroes(): Observable<Heroe[]> {
    console.log(1);
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
  }
  getHeroePorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${ id }`);
  }
  getSuegerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }
  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, heroe);
  }
  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe);
  }
  deleteHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${ id }`);
  }

}
