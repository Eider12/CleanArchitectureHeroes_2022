import { Publisher } from '../../../../domain/models/Publisher/publisher.model';


export interface HeroeEntity {
    id?:                string;
    superhero:          string;
    publisher: Publisher;
    alter_ego:          string;
    first_appearance:   string;
    characters:         string;
    alt_img?:           string;
}