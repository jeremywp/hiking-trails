import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailsComponent } from './trails/trails.component';
import { TrailInfoComponent } from './trail-info/trail-info.component';

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
