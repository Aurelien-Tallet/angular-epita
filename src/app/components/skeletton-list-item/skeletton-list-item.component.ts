import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeletton-list-item',
  templateUrl: './skeletton-list-item.component.html',
  styleUrls: ['./skeletton-list-item.component.scss']
})
export class SkelettonListItemComponent {
  @Input()
  number: number = 20;
  skeletonList: Array<any> = [...Array(this.number).fill(0)];
}
