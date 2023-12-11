import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {
  skeletons: Array<number> = [];
  @Input() number: number = 9;

  ngOnInit(): void {
    this.skeletons = [...Array(this.number).keys()];
  }
}
