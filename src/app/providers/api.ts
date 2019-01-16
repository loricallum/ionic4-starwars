import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProvider {

  apiUrl: string = 'https://swapi.co/api/';

  constructor(public http: HttpClient) {

  }

  getItems(url) {
    return this.http.get(url)
      .map(data => data.json());
  }

  getPeople() {
    return this.http.get(this.apiUrl + 'people/1/')
      .map(data => data.json());
  }

  getMovies() {
    return this.http.get(this.apiUrl + 'films')
      .map(data => data.json());
  }

  getStarships() {
    return this.http.get(this.apiUrl + 'starships')
      .map(data => data.json());
  }

  getSpecies() {
    return this.http.get(this.apiUrl + 'species')
      .map(data => data.json());
  }

  getPlanets() {
    return this.http.get(this.apiUrl + 'planets')
      .map(data => data.json());
  }

  getVehicles() {
    return this.http.get(this.apiUrl + 'vehicles')
      .map(data => data.json());
  }

  getPeoples() {
    return this.http.get(this.apiUrl + 'people')
      .map(data => data.json());
  }

}
