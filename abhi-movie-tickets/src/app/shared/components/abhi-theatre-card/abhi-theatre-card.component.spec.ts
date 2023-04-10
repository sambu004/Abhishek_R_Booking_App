import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhiTheatreCardComponent } from './abhi-theatre-card.component';

describe('AbhiTheatreCardComponent', () => {
  let component: AbhiTheatreCardComponent;
  let fixture: ComponentFixture<AbhiTheatreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhiTheatreCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhiTheatreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
