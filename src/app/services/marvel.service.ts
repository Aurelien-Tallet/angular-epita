import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'src/environments/environment.dev';


// Dependency injection in ListItemComponent
@Injectable({
  providedIn: "root"
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
    const hash = this.generateHash(timestamp);

    let params = new HttpParams()
      .set('apikey', this.publicKey)
      .set('ts', timestamp)
      .set('hash', hash)

    return this.http.get<any>(`${this.baseUrl}:${this.port}/v1/public/characters`, { params });
  }
  // Move this method to a helper file
  private generateHash(timestamp: string): string {
    const hashInput = timestamp + this.privateKey + this.publicKey;
    return crypto.MD5(hashInput).toString();
  }
}



