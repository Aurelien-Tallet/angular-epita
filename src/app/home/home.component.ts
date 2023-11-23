import { Component, Input } from '@angular/core';
import {ApiService} from "@services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  characters: Array<any> = [];
  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.apiService.searchByName("Margarita").subscribe(({ data }) => {
      console.log(data)
    });
  }
}
