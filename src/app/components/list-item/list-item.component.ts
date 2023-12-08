import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from "@app/dto/drink.dto";
import { Cocktail } from '@app/models/cocktail.model';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() cocktails: Array<Cocktail> = [];
  @Input() isLoading: boolean = true;

  get pages(): number {
    return Math.ceil(this.cocktails.length % 9 === 0 ? this.cocktails.length / 9 : (this.cocktails.length / 9) + 1);
  }
  public currentPage: number = 1;
  get pagination(): Array<string | number> {
    const arr: (string | number)[] = [...Array(this.pages).keys()].map((i) => (i + 1).toString());
    if (this.pages > 10) {
      if (this.currentPage < 4) {
        arr.splice(7, this.pages - 10, "...");
      }
      else if (this.currentPage > this.pages - 3) {
        arr.splice(0, this.pages - 10, "...");
      }
      else {
        arr.splice(0, this.currentPage - 4, "...");
        arr.splice(7, this.pages - 10, "...");
      }
    }
    if (arr[arr.length - 1] === "...") {
      arr.splice(arr.length - 2, 1);
      arr.push(this.pages - 1);
    }
    return arr;
  }
  get cocktailsToShow(): Array<Cocktail> {

    if (this.cocktails.length === 0) return [];
    const start = (this.currentPage - 1) * 9;
    const end = this.currentPage * 9;
    return this.cocktails.slice(start, end);
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe((params) => {
        const page = params["page"];
        if (!page) {
          this.currentPage = 1;
        }
        else {
          this.currentPage = parseInt(page) > this.pages ? this.pages : parseInt(page);
        }
      });
  }
  public onSelectPage(page: string | number): void {
    if (page === "...") return;
    this.currentPage = parseInt(page.toString());
    this.router.navigate(["/"], { queryParams: { page: this.currentPage } });
  }
}
