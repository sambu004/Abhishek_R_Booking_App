import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BOOKING_APP } from 'src/app/shared/constants/ticket-booking-constants';

@Component({
  selector: 'app-login-ticket-booking',
  templateUrl: './login-ticket-booking.component.html',
  styleUrls: ['./login-ticket-booking.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginTicketBookingComponent implements OnInit {
  loginForm!: FormGroup;
  error!: string;
  constructor(private formBuilder: FormBuilder, private route: Router){
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userEmail: new FormControl('sambasivan004@gmail.com', Validators.required)
    });
  }

  goToHome(): void{
    if(this.loginForm.invalid) {
      this.error = 'please enter email';
      return;
    }
    sessionStorage.setItem(BOOKING_APP.apiKey, this.loginForm.controls['userEmail'].value);
    this.route.navigateByUrl('/home');
  }
}
