import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment.dev';
import hash from '@app/helpers/hash';

@Injectable({
  providedIn: 'root',
})

/*
 * Marvel Api Servie init
 */
export class MarvelService {
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    const { baseUrl, port, publicKey, privateKey } = environment;
    const timestamp = new Date().getTime().toString();
    let params = new HttpParams()
      .set('apikey', publicKey)
      .set('ts', timestamp)
      .set('hash', hash(timestamp + privateKey + publicKey));
    const URL: string = `${baseUrl}:${port}/v1/public/characters` as const;
    return this.http.get<any>(URL, { params });
  }
  getSingleCharacter(id: string): Observable<any> {
    const { baseUrl, port, publicKey, privateKey } = environment;
    const timestamp = new Date().getTime().toString();
    let params = new HttpParams()
      .set('apikey', publicKey)
      .set('ts', timestamp)
      .set('hash', hash(timestamp + privateKey + publicKey));
    const URL: string = `${baseUrl}:${port}/v1/public/characters/${id}` as const;
    return this.http.get<any>(URL, { params });
  }
}
