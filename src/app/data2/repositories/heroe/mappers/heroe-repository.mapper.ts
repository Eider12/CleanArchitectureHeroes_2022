import { Mapper } from '../../../../base/mapper';
import { Heroe } from 'src/app/domain/models/Heroes/heroes.model';
import { HeroeEntity } from '../entities/heroe-entity';





export class HeroeImplementationRepositoryMapper extends Mapper<HeroeEntity, Heroe> {
    mapFrom(param: HeroeEntity): Heroe {
        return {
            id: param.id,
            superhero: param.superhero,
            publisher: param.publisher,
            alter_ego: param.alter_ego,
            first_appearance: param.first_appearance,
            characters: param.characters,
            alt_img: param.alt_img
        };
    }
    mapTo(param: Heroe): HeroeEntity {
        return {
            id: param.id,
            superhero: param.superhero,
            publisher: param.publisher,
            alter_ego: param.alter_ego,
            first_appearance: param.first_appearance,
            characters: param.characters,
            alt_img: param.alt_img
        };
    }
}