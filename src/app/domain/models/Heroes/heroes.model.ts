import { Publisher } from "../Publisher/publisher.model";


export interface Heroe {
    id?:              string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:         string;
}