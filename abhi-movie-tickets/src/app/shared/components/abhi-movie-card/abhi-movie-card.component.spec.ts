import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhiMovieCardComponent } from './abhi-movie-card.component';

describe('AbhiMovieCardComponent', () => {
  let component: AbhiMovieCardComponent;
  let fixture: ComponentFixture<AbhiMovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhiMovieCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhiMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
