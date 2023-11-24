import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from "@services/api.service";
import {Drink} from "@models/drink.interface";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss','../../styles.scss'],
})
export class SingleComponent implements OnInit {
  public cocktail: Drink;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.cocktail = {};
  }

  getIngredients(cocktail: any): string[] {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      try {
        if (cocktail[`strIngredient${i}`]) {
          ingredients.push(`${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`] || ''}`);
        }
      } catch (e) {
        break;
      }
    }
    return ingredients;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const charId = params["id"];
      this.apiService.getSingle(charId).subscribe(({drinks}) => {
        this.cocktail = drinks[0];
      });
    });
  }
}
