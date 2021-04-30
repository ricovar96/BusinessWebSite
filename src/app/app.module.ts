import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarModule } from './Components/nav-bar/nav-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from './Components/carousel/carousel.module';
import { MktMessageModule } from './Components/mkt-message/mkt-message.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamComponent } from './Components/team/team.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    CardProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    CarouselModule,
    MktMessageModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule,
    MatCarouselModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'Team', component: TeamComponent},
      {path: 'Links', component: SearchComponent},
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
