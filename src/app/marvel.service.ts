import { Injectable } from '@angular/core';
import {environment} from "../srv/environment/environment";

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
  constructor() {
    // Get all env variables to use correctly the API
    this.baseUrl = environment.baseUrl;
    this.port = environment.port;
    this.publicKey = environment.publicKey;
    this.privateKey = environment.privateKey;
  }

  getCharacters(){
    return ["toto","toto2"];
  }
}
