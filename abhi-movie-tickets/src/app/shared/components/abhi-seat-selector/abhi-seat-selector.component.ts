import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'abhi-seat-selector',
  templateUrl: './abhi-seat-selector.component.html',
  styleUrls: ['./abhi-seat-selector.component.scss']
})
export class AbhiSeatSelectorComponent implements OnInit {
  @Input() seatId!: number;
  @Input() isDisabled = false;
  @Output() onSeatClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  isSelected = false;
  ngOnInit(): void {
  }

  onSeatSelection(): void {
    this.isSelected = !this.isSelected;
  }

}
