import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment.dev';
import hash from '@app/helpers/hash';

@Injectable({
  providedIn: 'root',
})

/*
 * Api Service init
 */
export class ApiService {
  constructor(private http: HttpClient) {}
  getRequest(path: string): Observable<any> {
    console.log(environment.baseUrl + path);
    return this.http.get(environment.baseUrl + path);
  }
  searchByName(name: string): Observable<any> {
    return this.getRequest('/search.php?s=' + name);
  }
  getSingle(id: string): Observable<any> {
    return this.getRequest('/lookup.php?i=' + id);
  }
}
