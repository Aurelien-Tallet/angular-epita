import { Component } from '@angular/core';
import { CocktailService } from "@app/services/cocktail.service";
import { Cocktail } from '@app/models/cocktail.model';
@Component({
  selector: 'app-more-cocktails',
  templateUrl: './more-cocktails.component.html',
  styleUrls: ['./more-cocktails.component.scss', '../../styles.scss']
})
export class MoreCocktailsComponent {
  public cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.cocktailService.getRandom().subscribe((cocktail) => {
        let image = cocktail[0].imageSource ? cocktail[0].imageSource : cocktail[0].thumbnail;
        if (!image || !image.indexOf(".jpg")) {
          image = "./assets/img/placeholder.png"
        }
        cocktail[0].image = image;
        this.cocktails.push(cocktail[0]);
      });
    }
  }

}
