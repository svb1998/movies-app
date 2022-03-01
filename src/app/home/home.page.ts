import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  movies = [];
  busqueda = '';

  constructor(private movieService: MovieService) {

  };


  ngOnInit(): void {
    this.movieService.getTopMovies().subscribe(res =>{
       this.movies = res.results;
      console.log(res.results);
    });
  }

  buscarString(nombre): void{
    if(nombre.length > 0){
      this.movieService.getBusqueda(nombre).subscribe(res =>{
        this.movies = res.results;
        console.log(res.results);
      });
    }else{
      this.movieService.getTopMovies().subscribe(res =>{
        this.movies = res.results;
       console.log(res.results);
     });
    }
   

}

}
