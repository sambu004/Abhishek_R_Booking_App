import { Component, OnInit } from '@angular/core';
import { IGetTheatresAndMoviesReq, IGetTheatresAndMoviesRes } from 'src/app/shared/models/ticket-booking-api-interface.model';
import { TicketBookingService } from '../ticket-booking.service';
import { BOOKING_APP } from 'src/app/shared/constants/ticket-booking-constants';

@Component({
  selector: 'app-tickets-booking-home',
  templateUrl: './tickets-booking-home.component.html',
  styleUrls: ['./tickets-booking-home.component.scss']
})

export class TicketsBookingHomeComponent implements OnInit {
  theatresAndMoviesRes!: IGetTheatresAndMoviesRes;
  emailId!: string;
  showSpinner = false;
  constructor(private ticketService: TicketBookingService) {}

  ngOnInit(): void {
    const apiKey = sessionStorage.getItem(BOOKING_APP.apiKey);
    if(apiKey) {
      this.emailId = apiKey;
    }
    const reqObj: IGetTheatresAndMoviesReq = <IGetTheatresAndMoviesReq>{};
    reqObj.user_mail_id = this.emailId;
    this.showSpinner = true;
    this.getAllTheatresAndMovies(reqObj);
  }

  getAllTheatresAndMovies(reqObj: IGetTheatresAndMoviesReq): void {
    this.ticketService.getAllTheatresAndMovies(reqObj).subscribe({
      next: (res: IGetTheatresAndMoviesRes)=>{
        this.showSpinner = false;
        this.theatresAndMoviesRes = res;
      },
      error: ()=>{
        this.showSpinner = false;
      }
    });
  }

  createDataStructure(theatreMovieData: IGetTheatresAndMoviesRes) {
    
  }

}
