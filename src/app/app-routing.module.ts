import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './FrontClient/aboutus/aboutus.component';
import { BecomecoachComponent } from './FrontClient/becomecoach/becomecoach.component';
import { CoachdetailsComponent } from './FrontClient/coachdetails/coachdetails.component';
import { CoachingComponent } from './FrontClient/coaching/coaching.component';
import { ContactComponent } from './FrontClient/contact/contact.component';
import { HomeComponent } from './FrontClient/home/home.component';
import { LoginComponent } from './FrontClient/login/login.component';
import { RegisterComponent } from './FrontClient/register/register.component';
import { ReservecoachComponent } from './FrontClient/reservecoach/reservecoach.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'coachdetails', component: CoachdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'becomecoach', component: BecomecoachComponent },
  { path: 'reservecoach', component: ReservecoachComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
