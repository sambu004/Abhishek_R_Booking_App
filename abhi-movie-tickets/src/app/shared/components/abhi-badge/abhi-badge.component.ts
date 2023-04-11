import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'abhi-badge',
  templateUrl: './abhi-badge.component.html',
  styleUrls: ['./abhi-badge.component.scss']
})
export class AbhiBadgeComponent {
@Input() badgetype!: 'available' | 'warning' | 'redZone';
@Input() badgeText!: string;
@Output() onBadgeClick: EventEmitter<any> = new EventEmitter();

onClick(): void {
this.onBadgeClick.emit(this.badgeText);
}

}
