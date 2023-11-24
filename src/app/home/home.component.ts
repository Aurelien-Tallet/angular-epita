import { Component } from '@angular/core';
import { ApiService } from "@services/api.service";
import { FormGroup, FormControl } from '@angular/forms';
import { nonAlcoholicPipe } from '../pipes/non-alcoholic.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  drinks: Array<any> = [];
  categories: Array<any> = [];
  isLoading: boolean = true;
  form: FormGroup;;
  constructor(private apiService: ApiService) {
    this.form = new FormGroup({
      nonAlcoholic: new FormControl(false),
      category: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.apiService.searchByName("").subscribe(({ drinks }) => {
      this.drinks = drinks;
      this.isLoading = false;
    });
    this.apiService.getCategories().subscribe(({ drinks }) => {
      this.categories = drinks.map((drink: any) => drink.strCategory);
    });

  }
  get nonAlcoholic(): boolean { return this.form.get("nonAlcoholic")?.value; }
  get category(): string { return this.form.get("category")?.value; }
  onSearch(searchText: string) {
    this.isLoading = true;
    this.apiService.searchByName(searchText).subscribe(({ drinks }) => {
      this.drinks = drinks;
    });
  }
  onSelectCategory(category: string) {
    this.form.get("category")?.setValue(category);
  }
}
