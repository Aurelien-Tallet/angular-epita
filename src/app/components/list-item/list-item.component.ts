import { Component, Input } from '@angular/core';
type Thumbnail = { path: string, extension: string };
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() characters: Array<any> = [];
  @Input() isLoading: boolean = true;
  skeletonList: Array<any> = [...Array(20).fill(0)];
  URL({ path, extension }: Thumbnail): string {
    return `${path}.${extension}`;
  }

}
