import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbhiBadgeComponent } from './components/abhi-badge/abhi-badge.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AbhiTheatreCardComponent } from './components/abhi-theatre-card/abhi-theatre-card.component';
import { AbhiMovieCardComponent } from './components/abhi-movie-card/abhi-movie-card.component';
import { AbhiSeatSelectorComponent } from './components/abhi-seat-selector/abhi-seat-selector.component';
import { AbhiReelSpinnerComponent } from './components/abhi-reel-spinner/abhi-reel-spinner.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AbhiBadgeComponent,
    AbhiTheatreCardComponent,
    AbhiMovieCardComponent,
    AbhiSeatSelectorComponent,
    AbhiReelSpinnerComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule
  ],
  exports: [
    AbhiBadgeComponent,
    AbhiTheatreCardComponent,
    AbhiMovieCardComponent,
    AbhiSeatSelectorComponent,
    AbhiReelSpinnerComponent
  ]
})
export class SharedModule { }
