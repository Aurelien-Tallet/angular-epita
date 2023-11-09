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
  private readonly baseUrl: string
  private readonly port: number
  private readonly publicKey: string
  private readonly privateKey: string
  constructor(private http: HttpClient) {
    const { baseUrl, port, publicKey, privateKey } = environment;
    this.baseUrl = baseUrl;
    this.port = port;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
  }
  marvelRequest(path: string): Observable<any> {
    const timestamp = new Date().getTime().toString();
    let params = new HttpParams()
      .set('apikey', this.publicKey)
      .set('ts', timestamp)
      .set('hash', hash(timestamp + this.privateKey + this.publicKey));
    const URL: string = `${this.baseUrl}:${this.port}${path}` as const;
    return this.http.get<any>(URL, { params });
  }
  getAllCharacters(): Observable<any> {
    return this.marvelRequest('/v1/public/characters');
  }
  getSingleCharacter(id: string): Observable<any> {
    return this.marvelRequest(`/v1/public/characters/${id}`);
  }
}
