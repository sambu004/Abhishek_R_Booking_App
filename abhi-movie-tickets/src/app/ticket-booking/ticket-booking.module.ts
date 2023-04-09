import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { TicketsBookingHomeComponent } from './tickets-booking-home/tickets-booking-home.component';
import { LoginTicketBookingComponent } from './login-ticket-booking/login-ticket-booking.component';
import { SeatBookingModalComponent } from './seat-booking-modal/seat-booking-modal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TicketsBookingHomeComponent,
    LoginTicketBookingComponent,
    SeatBookingModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TicketBookingRoutingModule
  ]
})
export class TicketBookingModule { }
