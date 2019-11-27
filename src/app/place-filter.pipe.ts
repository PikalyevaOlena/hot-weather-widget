import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from 'src/app/interfaces';

@Pipe({
  name: 'placeFilter'
})
export class PlaceFilterPipe implements PipeTransform {

  transform(places: IPlace[], selectedType: string): IPlace[] {
      if (selectedType) {
          return places.filter((place: IPlace): boolean => place.type === selectedType);
      }
      return places;
  }

}
