import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITheatres } from '../../models/theatre-and-movie-interface';

@Component({
  selector: 'abhi-theatre-card',
  templateUrl: './abhi-theatre-card.component.html',
  styleUrls: ['./abhi-theatre-card.component.scss']
})
export class AbhiTheatreCardComponent {
  @Input() theatreDetails!: ITheatres;
  @Output() onTheatreCardClick: EventEmitter<any> = new EventEmitter();

  onCardClick(): void {
    this.onTheatreCardClick.emit(this.theatreDetails);
  }
}
