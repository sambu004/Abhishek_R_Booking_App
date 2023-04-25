import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'abhi-seat-selector',
  templateUrl: './abhi-seat-selector.component.html',
  styleUrls: ['./abhi-seat-selector.component.scss']
})
export class AbhiSeatSelectorComponent {
  @Input() seatId!: number;
  @Input() isDisabled = false;
  @Output() onSeatClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() isSelected = false;

  onSeatSelection(): void {
    if(this.isDisabled){
      return;
    }
    this.isSelected = !this.isSelected;
    this.onSeatClick.emit(this.seatId);
  }

}
