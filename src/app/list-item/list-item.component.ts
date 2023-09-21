import { Component } from '@angular/core';
import {MarvelService} from "../marvel.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  test: Array<string>;
  // Init Api Helper
  constructor(private apiHelper: MarvelService) {
    this.apiHelper = new MarvelService;
    this.test = this.apiHelper.getCharacters();
  }
}
