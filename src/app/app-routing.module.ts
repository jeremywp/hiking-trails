import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailsComponent } from './trails/trails.component';
import { TrailInfoComponent } from './trail-info/trail-info.component';
<<<<<<< HEAD
import {TrailsOfUserComponent} from "./trails-of-user/trails-of-user.component";
=======
import { TrailsOfUserComponent } from './trails-of-user/trails-of-user.component';
>>>>>>> df03b7cfbfdd6c1115cfff1e9ac9bdef449063af

const routes: Routes = [
  {
    path: 'trails',
    component: TrailsComponent
  },
  {
    path: 'trail-info',
    component: TrailInfoComponent
  },
  {
    path: 'user',
    component: TrailsOfUserComponent
  },
  { 
    path: '', 
    redirectTo: 'trails', 
    pathMatch: 'full' 
  },
  { path: '**', 
    redirectTo: 'trails', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
