import { Component, OnInit } from '@angular/core';
import { IPlace, IWeather, ISocial } from './interfaces';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public places: IPlace[] = [];
  public weather: IWeather;
  public social: ISocial;
  constructor(private placesService: PlacesService) {}
  ngOnInit() {
    this.places = this.placesService.getAll();
  }
  public placeSelected(place: IPlace) {
    this.weather = place.weather;
    this.social = place.social_info;
  }
}
