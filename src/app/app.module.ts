import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieServiceClient } from './movie-search/services/movie.service.client';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MovieServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
