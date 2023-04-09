import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhiSeatSelectorComponent } from './abhi-seat-selector.component';

describe('AbhiSeatSelectorComponent', () => {
  let component: AbhiSeatSelectorComponent;
  let fixture: ComponentFixture<AbhiSeatSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhiSeatSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhiSeatSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
