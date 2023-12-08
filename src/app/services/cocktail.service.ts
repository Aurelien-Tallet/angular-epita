import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import environment from 'src/environments/environment.dev';
import { DrinksResponse } from '@app/dto/drink.dto';
import { CategoriesResponse } from '@app/dto/categories.dto';
import { Cocktail, cocktailMapper } from '@app/models/cocktail.model';

const { baseUrl, apiKey, apiHost } = environment;

const httpHeaders: HttpHeaders = new HttpHeaders({
  'X-RapidAPI-Key': apiKey,
  'X-RapidAPI-Host': apiHost
});

const HEADERS = { headers: httpHeaders } as const;

@Injectable({
  providedIn: 'root',
})
export class CocktailService {

  constructor(private readonly http: HttpClient) {
  }
  searchByName(name: string): Observable<Cocktail[]> {

    const data = this.http.get<DrinksResponse>(`${baseUrl}/search.php?s=${name}`, HEADERS);
    console.log(data);
    return data.pipe(map(({ drinks }) => {
      return drinks.map(cocktailMapper) || [];
    }));
  }
  getSingle(id: string): Observable<Cocktail[]> {
    const data = this.http.get<DrinksResponse>(`${baseUrl}/lookup.php?i=${id}`, HEADERS);
    return data.pipe(map(({ drinks }) => {
      return drinks?.map(cocktailMapper) || null;
    }));
  }
  getRandom(): Observable<Cocktail[]> {
    const data = this.http.get<DrinksResponse>(`${baseUrl}/random.php`, HEADERS);
    return data.pipe(map(({ drinks }) => {
      return drinks.map(cocktailMapper) || [];
    }));
  }
  getCategories(): Observable<string[]> {
    return this.http.get<CategoriesResponse>(`${baseUrl}/list.php?c=list`, HEADERS).pipe(
      map((response) => {
        return response?.drinks?.map((drink) => drink?.strCategory);
      })
    );
  }
}
