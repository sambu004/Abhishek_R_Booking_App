import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BOOKING_APP } from 'src/app/shared/constants/ticket-booking-constants';
import { IMovieCardEvent } from 'src/app/shared/models/theatre-and-movie-interface';

@Component({
  selector: 'seat-booking-modal',
  templateUrl: './seat-booking-modal.component.html',
  styleUrls: ['./seat-booking-modal.component.scss']
})
export class SeatBookingModalComponent implements OnInit {
  @Input() selectedMovieDetails!: IMovieCardEvent;
  @Output() onBooking: EventEmitter<any> = new EventEmitter();
  @Output() onBookingCancel: EventEmitter<any> = new EventEmitter();
  seatRows: any = [];
  numberOfSeats: number = 100;
  selectedSeats: any[] = [];
  colSeatNumbers = BOOKING_APP.seatColNumbers;
  rowSeatLabel = BOOKING_APP.seatRowLabel.reverse();
  displayNumbers: any[] = [];

  ngOnInit(): void {
    this.createSeatList();
    console.log(this.selectedMovieDetails.bookedSeats);
  }

  createSeatList(): void {
    let seatCol = [];
    for(let i = 1; i <=this.numberOfSeats; i++){
      const seatLabelIndex: any = seatCol.length === 0? 0 : seatCol.length - 1
      if(i%20 === 0){
        seatCol.push(this.createSeatObj(i));
        this.seatRows.push(seatCol);
        seatCol = [];
      } else {
        seatCol.push(this.createSeatObj(i));
      }
    }
  }

  createSeatObj(seatId: number): any {
    const seatObj = {
      id: 0,
      isSelected: false,
      isDisabled: false
    };
    seatObj.id = seatId;
    seatObj.isDisabled = this.selectedMovieDetails.bookedSeats.indexOf(seatId) !== -1;
    return seatObj;
  }

  //selecting or deselecting seats
  saveSelectedSeats(seatId: any, label: any, colId: any): void {
      const seatIndex = this.selectedSeats.indexOf(seatId);
      const displayIndex = this.displayNumbers.indexOf(seatId);
      if(seatIndex !== -1) {
        this.selectedSeats.splice(seatIndex, 1);
        this.displayNumbers.splice(displayIndex, 1);
      } else {
        this.selectedSeats.push(seatId);
        this.displayNumbers.push(`${label}${colId + 1}`);
      }
  }

  onCancel(): void {
    this.onBookingCancel.emit(true);
  }

  onBook(): void {
    this.onBooking.emit(this.selectedSeats);
  }

}
