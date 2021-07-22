import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeLandingPageComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeLandingPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
