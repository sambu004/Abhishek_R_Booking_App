import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTicketBookingComponent } from './login-ticket-booking/login-ticket-booking.component';
import { TicketsBookingHomeComponent } from './tickets-booking-home/tickets-booking-home.component';
import { authGuard } from './ticket-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', pathMatch: 'full', component: LoginTicketBookingComponent },
  { path: 'home', component: TicketsBookingHomeComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketBookingRoutingModule { }
