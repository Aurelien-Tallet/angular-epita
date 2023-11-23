import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent {

  searchText: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  timeOut: any;

  constructor() {
  }

  search(event: any) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.searchEvent.emit(event.target.value);
    }, 500);
  }
}
