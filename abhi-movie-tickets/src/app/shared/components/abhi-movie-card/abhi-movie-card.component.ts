import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMovieCardEvent, IMovies } from '../../models/theatre-and-movie-interface';
import { IMoviesRes } from '../../models/ticket-booking-api-interface.model';

@Component({
  selector: 'abhi-movie-card',
  templateUrl: './abhi-movie-card.component.html',
  styleUrls: ['./abhi-movie-card.component.scss']
})
export class AbhiMovieCardComponent {
@Input() movieData!: IMovies;
@Input() theatreName!: string;
@Input() bookingType!: string;
@Input() movieDetail!: IMoviesRes;
@Output() onShowClick: EventEmitter<any> = new EventEmitter();
@Output() onMovieClick: EventEmitter<any> = new EventEmitter();
setBadgeType(i: any): any{
  if(this.movieData.bookedSeats[i].length > 50){
    return 'warning';
  } 
  if(this.movieData.bookedSeats[i].length > 50) {
    return 'redZone';
  }
  if(this.movieData.bookedSeats[i].length < 50) {
    return 'available';
  }
}

onShowClicked(showTime: any, index: any) {
  const eventDetails: IMovieCardEvent = {
    movieName: this.movieData.movieName,
    theatreName: this.theatreName,
    showTime: showTime,
    bookedSeats: this.movieData.bookedSeats[index]
  }
  this.onShowClick.emit(eventDetails);
}

onMovieClicked(movieName: string) {
  this.onMovieClick.emit(movieName);
}

}
