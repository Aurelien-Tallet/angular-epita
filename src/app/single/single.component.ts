import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from "@app/services/cocktail.service";
import { Drink } from "@app/dto/drink.dto";
import { Cocktail } from '@app/models/cocktail.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss', '../../styles.scss'],
})
export class SingleComponent implements OnInit {
  public cocktail: Cocktail;

  constructor(private route: ActivatedRoute, private cocktailService: CocktailService) {
    this.cocktail = {};
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const charId = params["id"];
      this.cocktailService.getSingle(charId).subscribe((cocktail) => {
        this.cocktail = cocktail[0];
      });
    });
  }
}
