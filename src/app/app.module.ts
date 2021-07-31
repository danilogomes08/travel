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
import { TravelGuideComponent } from './travel-guide/travel-guide.component';
import { AlaskaComponent } from './alaska/alaska.component';
import { AntarcticaComponent } from './antarctica/antarctica.component';
import { CanadaComponent } from './canada/canada.component';
import { FinlandComponent } from './finland/finland.component';
import { GreenlandComponent } from './greenland/greenland.component';
import { FaroeIslandsComponent } from './faroe-islands/faroe-islands.component';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeLandingPageComponent},
      {path: 'about', component: AboutComponent},
      {path: 'travel', component: TravelGuideComponent},
      {path: 'alaska', component: AlaskaComponent},
      {path: 'antarctica', component: AntarcticaComponent},
      {path: 'canada', component: CanadaComponent},
      {path: 'faroe', component: FaroeIslandsComponent},
      {path: 'greenland', component: GreenlandComponent},
      {path: 'finland', component: FinlandComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeLandingPageComponent, AboutComponent, FooterComponent, TravelGuideComponent, AlaskaComponent, AntarcticaComponent, CanadaComponent, FinlandComponent, GreenlandComponent, FaroeIslandsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
