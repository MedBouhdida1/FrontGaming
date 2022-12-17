import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

const routes: Routes = [
  {
    path:'home',component:HomeAdminComponent
  },
  {
    path:'login',component:LoginAdminComponent
  },
  { path: '', redirectTo:'home',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
