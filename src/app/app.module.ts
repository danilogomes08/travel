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
import { NorthernLightsComponent } from './northern-lights/northern-lights.component';
import { CanoeingComponent } from './canoeing/canoeing.component';
import { SledDogComponent } from './sled-dog/sled-dog.component';
import { CruiseComponent } from './cruise/cruise.component';
import { FamilyComponent } from './family/family.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PhotosComponent } from './photos/photos.component';

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
      {path: 'finland', component: FinlandComponent},
      {path: 'northern', component: NorthernLightsComponent},
      {path: 'canoeing', component: CanoeingComponent},
      {path: 'sled', component: SledDogComponent},
      {path: 'cruise', component: CruiseComponent},
      {path: 'family', component: FamilyComponent}, 
      {path: 'activities', component: ActivitiesComponent},
      {path: 'photos', component: PhotosComponent}
    ])
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeLandingPageComponent, AboutComponent, FooterComponent, TravelGuideComponent, AlaskaComponent, AntarcticaComponent, CanadaComponent, FinlandComponent, GreenlandComponent, FaroeIslandsComponent, NorthernLightsComponent, CanoeingComponent, SledDogComponent, CruiseComponent, FamilyComponent, ActivitiesComponent, PhotosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
