import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: Array<any> = [];
  selected: string = '';
  @Output() selectEvent = new EventEmitter<string>();
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.selected = params['category'];
      }
    });
  }

  select(event: any) {
    this.selectEvent.emit(event);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: event, page: 1 },
      queryParamsHandling: 'merge'
    });
  }
}
