import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdashboardComponent } from './ddashboard/ddashboard.component';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardFreeComponent } from './dashboard-free/dashboard-free.component';
import { MenuFreeComponent } from './menu-free/menu-free.component';


const routes: Routes = [
  {path: 'dashboard/:id', component: DdashboardComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AuthComponent},
  {path: 'menu/:id', component: MenuComponent},
  {path: 'menuImg/:id', component: MenuFreeComponent},

  {path: 'dash/:id', component: DashboardFreeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
