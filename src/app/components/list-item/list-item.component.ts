import { Component, Input } from '@angular/core';
import { MarvelService } from '@services/marvel.service';
type Thumbnail = { path: string, extension: string };
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() characters: Array<any> = [];

  buildImage({ path, extension }: Thumbnail): string {
    return `${path}.${extension}`;
  }
}
