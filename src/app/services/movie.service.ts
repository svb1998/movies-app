import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = '?api_key=2cec7f1273945c12b09e7963ad12c26d';
  url = 'https://api.themoviedb.org/3';



  constructor(private http: HttpClient) { }

  getTopMovies(): Observable<any>{
    return this.http.get(`${this.url}/movie/popular${this.apiKey}`);
  }

  getDetails(id){
    return this.http.get( `${this.url}/movie/${id}${this.apiKey}`);
  }

  getBusqueda(busqueda): Observable<any>{
      return this.http.get(`${this.url}/search/movie/${this.apiKey}&query=${busqueda.replace(' ','+')}`);
  }

}
