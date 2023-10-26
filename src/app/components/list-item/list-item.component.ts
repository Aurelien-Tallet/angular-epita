import { Component } from '@angular/core';
import { MarvelService } from '@services/marvel.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  test: Array<any> = [];
  constructor(private marvelService: MarvelService) {
  }
  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe(({ data }) => {
      this.test = data.results;
    });
  }
}
