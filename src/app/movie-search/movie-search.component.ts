import { Component, OnInit } from '@angular/core';
import { MovieServiceClient } from './services/movie.service.client';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  hello = 'Hello dari Movie-MovieSearch';
  movies =  [
    {title: 'Yowis Ben 2'},
    {title: 'Dilan 1991'},
    {title: 'Preman Pensiun'},
    {title: 'Pretty Boys'}
  ]
  constructor(private movieService: MovieServiceClient) { }

  ngOnInit() {
    this.movieService
     .findYowisMovie()
     .then(res => this.movies = res.Search);
  }

}
