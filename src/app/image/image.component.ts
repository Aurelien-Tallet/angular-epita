import { Component, Renderer2, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  @Input() src: string | undefined;
  ngOnInit(): void {
    const imgElement = this.el.nativeElement.querySelector('img');
    this.renderer.listen(imgElement, 'error', () => {
      imgElement.src = './assets/img/placeholder.png';
    });

  }
}
