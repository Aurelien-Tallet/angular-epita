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
  baseUrl: string;
  port: number;
  publicKey: string;
  privateKey: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.port = environment.port;
    this.publicKey = environment.publicKey;
    this.privateKey = environment.privateKey;
  }
  getAllCharacters(): Observable<any> {
    const timestamp = new Date().getTime().toString();
    let params = new HttpParams()
      .set('apikey', this.publicKey)
      .set('ts', timestamp)
      .set('hash', hash(timestamp + this.privateKey + this.publicKey));
    const URL = `${this.baseUrl}:${this.port}/v1/public/characters` as const;
    return this.http.get<any>(URL, { params });
  }
}
