import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from "@app/services/cocktail.service";
import { Cocktail } from '@app/models/cocktail.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss', '../../styles.scss'],
})
export class SingleComponent implements OnInit {
  cocktail: Cocktail;
  isLoading: boolean = true;


  constructor(private route: ActivatedRoute, private cocktailService: CocktailService, private router: Router) {
    this.cocktail = {};
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const charId = params["id"];
      this.cocktailService.getSingle(charId).subscribe((cocktail) => {
        if (!cocktail) {
          this.router.navigate(["/"]);
          return;
        }
        this.cocktail = cocktail[0];
        this.isLoading = false;
      });
    });
  }
}
