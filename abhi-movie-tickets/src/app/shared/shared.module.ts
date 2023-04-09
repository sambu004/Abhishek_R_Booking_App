import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbhiBadgeComponent } from './components/abhi-badge/abhi-badge.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AbhiTheatreCardComponent } from './components/abhi-theatre-card/abhi-theatre-card.component';
import { AbhiMovieCardComponent } from './components/abhi-movie-card/abhi-movie-card.component';
import { AbhiSeatSelectorComponent } from './components/abhi-seat-selector/abhi-seat-selector.component';

@NgModule({
  declarations: [
    AbhiBadgeComponent,
    AbhiTheatreCardComponent,
    AbhiMovieCardComponent,
    AbhiSeatSelectorComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    AbhiBadgeComponent
  ]
})
export class SharedModule { }
