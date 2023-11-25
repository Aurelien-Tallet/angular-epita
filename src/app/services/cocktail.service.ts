import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import environment from 'src/environments/environment.dev';
import { Drink, DrinksResponse } from '@app/dto/drink.dto';
import { CategoriesResponse } from '@app/dto/categories.dto';
import { Cocktail, cocktailMapper } from '@app/models/cocktail.model';

@Injectable({
  providedIn: 'root',
})

/*
 * Api Service init
 */
export class CocktailService {
  private readonly baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  searchByName(name: string): Observable<Cocktail[]> {
    const data = this.http.get<DrinksResponse>(`${this.baseUrl}/search.php?s=${name}`);
    return data.pipe(map(({ drinks }) => {
      return drinks.map(cocktailMapper);
    }));
  }
  getSingle(id: string): Observable<Cocktail[]> {
    const data = this.http.get<DrinksResponse>(`${this.baseUrl}/lookup.php?i=${id}`);
    return data.pipe(map(({ drinks }) => {
      return drinks.map(cocktailMapper);
    }));
  }
  getRandom(): Observable<Cocktail[]> {
    const data = this.http.get<DrinksResponse>(`${this.baseUrl}/random.php`);
    return data.pipe(map(({drinks}) => {
      return drinks.map(cocktailMapper);
    }));
  }
  getCategories(): Observable<string[]> {
    return this.http.get<CategoriesResponse>(`${this.baseUrl}/list.php?c=list`).pipe(
      map((response) => {
        return response?.drinks?.map((drink) => drink?.strCategory);
      })
    );
  }
}
