import { Component } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {ApiService} from "@services/api.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent {
  public name = '';
  private charId= '';
  constructor(private route: ActivatedRoute,private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
     this.charId = params["id"];
      this.apiService.getSingle(this.charId).subscribe(({  drinks }) => {
        console.log(drinks[0]);
        this.name = drinks[0].strDrink;
      });
    });
  }
}
