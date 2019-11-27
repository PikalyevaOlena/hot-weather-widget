import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaceFilterPipe } from '../place-filter.pipe';
import { IPlace } from 'src/app/interfaces';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html'
})
export class PlacesListComponent implements OnInit {
  @Input() public places: IPlace[];
  @Output() placeSelected: EventEmitter<IPlace> = new EventEmitter();
  public types: string[];
  public selectedType: string;
  public selectedPlace: IPlace;
  constructor(private placeFilter: PlaceFilterPipe) {}
  ngOnInit() {
    this.types = [...new Set(
        this.places.map(place => place.type)
    )];
    this.selectType();
  }
  getFirstPlace(): IPlace {
    return this.placeFilter.transform(this.places, this.selectedType)[0];
  }
  selectType(placeType?: string): void {
    this.selectedType = placeType;
    this.selectedPlace = this.getFirstPlace();
    this.placeSelected.emit(this.selectedPlace);
  }
  selectPlace(place: IPlace) {
    this.selectedPlace = place;
    this.placeSelected.emit(place);
  }
}
