import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbhiViewCardComponent } from './components/abhi-view-card/abhi-view-card.component';
import { AbhiViewTileComponent } from './components/abhi-view-tile/abhi-view-tile.component';



@NgModule({
  declarations: [
    AbhiViewCardComponent,
    AbhiViewTileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
