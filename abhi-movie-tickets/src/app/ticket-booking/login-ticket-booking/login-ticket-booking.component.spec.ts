import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTicketBookingComponent } from './login-ticket-booking.component';

describe('LoginTicketBookingComponent', () => {
  let component: LoginTicketBookingComponent;
  let fixture: ComponentFixture<LoginTicketBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTicketBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTicketBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
