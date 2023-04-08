import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhiViewCardComponent } from './abhi-view-card.component';

describe('AbhiViewCardComponent', () => {
  let component: AbhiViewCardComponent;
  let fixture: ComponentFixture<AbhiViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhiViewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhiViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
