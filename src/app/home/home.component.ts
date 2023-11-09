import { Component, Input } from '@angular/core';
import { MarvelService } from '@services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  characters: Array<any> = [];
  constructor(private marvelService: MarvelService) {
  }
  ngOnInit(): void {
    this.marvelService.getAllCharacters().subscribe(({ data }) => {
      this.characters = data.results;
    });
  }

}
