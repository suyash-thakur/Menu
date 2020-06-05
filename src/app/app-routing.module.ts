import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdashboardComponent } from './ddashboard/ddashboard.component';


const routes: Routes = [
  {path:'dashboard', component: DdashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
