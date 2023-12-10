import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent {

  searchText: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  timeOut: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['search'] || params['page']) {
        this.searchText = params['search'];
        this.searchEvent.emit(this.searchText);
      }
    });
  }


  search(event: any) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.searchEvent.emit(event.target.value);
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { search: event.target.value, page: 1 },
        queryParamsHandling: 'merge'
      });
    }, 500);
  }
}
