import { Component } from '@angular/core';
import { CocktailService } from "@app/services/cocktail.service";
import { FormGroup, FormControl } from '@angular/forms';
import { Cocktail } from '@app/models/cocktail.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cocktails: Array<Cocktail> = [];
  categories: Array<any> = [];
  isLoading: boolean = true;
  form: FormGroup;
  constructor(private cocktailService: CocktailService) {
    this.form = new FormGroup({
      nonAlcoholic: new FormControl(false),
      category: new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.cocktailService.searchByName("").subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
      this.isLoading = false;
    });
    this.cocktailService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

  }
  get nonAlcoholic(): boolean { return this.form.get("nonAlcoholic")?.value; }
  get category(): string { return this.form.get("category")?.value; }
  onSearch(searchText: string) {
    this.isLoading = true;
    this.cocktailService.searchByName(searchText).subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
      this.isLoading = false;
    });
  }
  onSelectCategory(category: string) {
    this.form.get("category")?.setValue(category);
  }
}
