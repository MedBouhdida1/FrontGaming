import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './FrontClient/home/home.component';
import { NavbarComponent } from './FrontClient/navbar/navbar.component';
import { FooterComponent } from './FrontClient/footer/footer.component';
import { CoachingComponent } from './FrontClient/coaching/coaching.component';
import { LoginComponent } from './FrontClient/login/login.component';
import { RegisterComponent } from './FrontClient/register/register.component';
import { CoachdetailsComponent } from './FrontClient/coachdetails/coachdetails.component';
import { ContactComponent } from './FrontClient/contact/contact.component';
import { ReservecoachComponent } from './FrontClient/reservecoach/reservecoach.component';
import { BecomecoachComponent } from './FrontClient/becomecoach/becomecoach.component';
import { AboutusComponent } from './FrontClient/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CoachingComponent,
    LoginComponent,
    RegisterComponent,
    CoachdetailsComponent,
    ContactComponent,
    ReservecoachComponent,
    BecomecoachComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
