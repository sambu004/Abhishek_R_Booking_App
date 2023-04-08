import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhiViewTileComponent } from './abhi-view-tile.component';

describe('AbhiViewTileComponent', () => {
  let component: AbhiViewTileComponent;
  let fixture: ComponentFixture<AbhiViewTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbhiViewTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbhiViewTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
