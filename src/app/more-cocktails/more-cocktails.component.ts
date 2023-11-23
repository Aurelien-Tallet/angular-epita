import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "@services/api.service";
import {Drink} from "@models/drink.interface";

@Component({
  selector: 'app-more-cocktails',
  templateUrl: './more-cocktails.component.html',
  styleUrls: ['./more-cocktails.component.scss','../../styles.scss']
})
export class MoreCocktailsComponent {
  public cocktails: Drink[];

  constructor(private apiService: ApiService) {
    this.cocktails = [];
  }

  ngOnInit(): void {
    for(let i = 0;i <3;i++){
      this.apiService.getRandom().subscribe(({drinks}) => {
        let image = drinks[0].strImageSource ? drinks[0].strImageSource : drinks[0].strDrinkThumb;
        if(!image || !image.indexOf(".jpg")){
          image = "./assets/img/placeholder.png"
        }
        drinks[0].image = image;
        this.cocktails.push(drinks[0]);
      });
    }
  }

}
