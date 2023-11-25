import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: Array<any> = [];
  selected: string = '';
  @Output() selectEvent = new EventEmitter<string>();
  constructor() { }

  select(event: any) {
    this.selectEvent.emit(event);
  }
}
