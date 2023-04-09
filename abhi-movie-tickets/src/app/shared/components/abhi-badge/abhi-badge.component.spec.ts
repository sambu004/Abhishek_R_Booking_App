import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhiBadgeComponent } from './abhi-badge.component';

describe('AbhiBadgeComponent', () => {
  let component: AbhiBadgeComponent;
  let fixture: ComponentFixture<AbhiBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhiBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhiBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
