import { Component, Input } from '@angular/core';
import {Drink} from "@models/drink.interface";
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() drinks: Array<Drink> = [];
  @Input() isLoading: boolean = true;
}
