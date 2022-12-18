import { Observable } from 'rxjs';
import { Heroe } from '../domain/Heroes/heroes.model';


export abstract class HeroesRepository {

    abstract getHeroes(): Observable<Heroe[]>;
    abstract getHeroePorId(id: string): Observable<Heroe>;
    abstract getSuegerencias(termino: string): Observable<Heroe[]>;
    abstract agregarHeroe(heroe: Heroe): Observable<Heroe>;
    abstract actualizarHeroe(heroe: Heroe): Observable<Heroe>;
    abstract deleteHeroe(id: string): Observable<any>;
}
