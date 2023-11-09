import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment.dev';
import hash from '@app/helpers/hash';

@Injectable({
  providedIn: 'root',
})

/*
 * Marvel Api Service init
 */
export class MarvelService {
  constructor(private http: HttpClient) {}
  getMarvelRequest(path: string): Observable<any> {
    const timestamp = new Date().getTime().toString();
    let params = new HttpParams()
      .set('apikey', environment.publicKey)
      .set('ts', timestamp)
      .set('hash', hash(timestamp + environment.privateKey + environment.publicKey));
    const URL: string = `${environment.baseUrl}:${environment.port}${path}` as const;
    return this.http.get<any>(URL, { params });
  }
  getAllCharacters(): Observable<any> {
    return this.getMarvelRequest('/v1/public/characters');
  }
  getSingleCharacter(id: string): Observable<any> {
    return this.getMarvelRequest(`/v1/public/characters/${id}`);
  }
}
