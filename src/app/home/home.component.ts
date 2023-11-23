import { Component } from '@angular/core';
import { ApiService } from "@services/api.service";
import { FormGroup, FormControl } from '@angular/forms';
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
      alcoholic: new FormControl(false),
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

  get filteredDrinks(): Array<any> {
    let data = [...this.drinks]
    if(this.form.get("category")?.value ){
      data = this.drinks.filter((drink: any) => drink.strCategory === this.form.get("category")?.value);
    }
    if (this.form.get("alcoholic")?.value) {
      console.log("alcoholic");
      data = data.filter((drink: any) => drink.strAlcoholic === "Alcoholic");
    }
    return data;

  }
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
