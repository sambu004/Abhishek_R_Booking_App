import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsBookingHomeComponent } from './tickets-booking-home.component';

describe('TicketsBookingHomeComponent', () => {
  let component: TicketsBookingHomeComponent;
  let fixture: ComponentFixture<TicketsBookingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsBookingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsBookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
