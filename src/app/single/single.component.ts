import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from "@services/api.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
  public cocktail: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
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
