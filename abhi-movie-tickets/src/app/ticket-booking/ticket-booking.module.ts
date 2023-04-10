import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { TicketsBookingHomeComponent } from './tickets-booking-home/tickets-booking-home.component';
import { LoginTicketBookingComponent } from './login-ticket-booking/login-ticket-booking.component';
import { SeatBookingModalComponent } from './seat-booking-modal/seat-booking-modal.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TicketsBookingHomeComponent,
    LoginTicketBookingComponent,
    SeatBookingModalComponent
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    TicketBookingRoutingModule
  ]
})
export class TicketBookingModule { }
