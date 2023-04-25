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
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    TicketsBookingHomeComponent,
    LoginTicketBookingComponent,
    SeatBookingModalComponent
  ],
  imports: [
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    TicketBookingRoutingModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class TicketBookingModule { }
