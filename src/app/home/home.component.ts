import { Component } from '@angular/core';
import {ApiService} from "@services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  drinks: Array<any> = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.apiService.searchByName("").subscribe(({ drinks }) => {
      setTimeout(() => {
      this.drinks = drinks;
      this.isLoading = false;
      }, 1000);
    });
  }
  onSearch(searchText: string) { 
    this.isLoading = true;
    this.apiService.searchByName(searchText).subscribe(({ drinks }) => {
      this.drinks = drinks;
      this.isLoading = false;
    });
  }
}
