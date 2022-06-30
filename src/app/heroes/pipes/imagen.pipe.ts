import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  // pure: false
  
  // Esto se pone para detectar a cualquier cambio pequno en el ciclo de vida, en este caso es para actualizar la imagen,
  // por default es Pure: true
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: Heroe ): string  {

    if( !heroe.id && !heroe.alt_img ) {
      return 'assets/no-image.png';
    } else if( heroe.alt_img ){
      return heroe.alt_img;
    } else {
      return `assets/heroes/${ heroe.id }.jpg`;
    }
  }
}
