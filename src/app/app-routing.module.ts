import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TrailsComponent } from './trails/trails.component';
import {TrailsByIdComponent} from "./trails-by-id/trails-by-id.component";

const routes: Routes = [
  { path: 'app-loginpage', component: LoginpageComponent },
  {
    path: 'search',
    component: TrailsComponent
  },
  {
    path: 'trails',
    component: TrailsByIdComponent
  },
  { path: '', redirectTo: 'app-loginpage', pathMatch: 'full' },
  { path: '**', redirectTo: 'app-loginpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
