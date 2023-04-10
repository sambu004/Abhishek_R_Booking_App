import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhiReelSpinnerComponent } from './abhi-reel-spinner.component';

describe('AbhiReelSpinnerComponent', () => {
  let component: AbhiReelSpinnerComponent;
  let fixture: ComponentFixture<AbhiReelSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhiReelSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhiReelSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
