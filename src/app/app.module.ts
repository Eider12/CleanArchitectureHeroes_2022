import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesRepository } from './domain/repositories/heroes.repositories';
// import { HeroesRepository } from './core/repositories/heroes.repositories';
// import { HeroeService } from './data/repository/heroe/heroe.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [{
  //   provide: HeroesRepository, useClass: HeroeService
  // }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
