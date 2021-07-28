import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeLandingPageComponent},
      {path: 'about', component: AboutComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeLandingPageComponent, AboutComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
