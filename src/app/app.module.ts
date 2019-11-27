import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlaceFilterPipe } from './place-filter.pipe';
import { PlacesService } from './places.service';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent,
    PlaceFilterPipe,
    WeatherComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PlacesService, PlaceFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
