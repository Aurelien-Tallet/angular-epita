import { Component, Input } from '@angular/core';
import {Drink} from "@app/dto/drink.dto";
import { Cocktail } from '@app/models/cocktail.model';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() cocktails: Array<Cocktail> = [];
  @Input() isLoading: boolean = true;
}
