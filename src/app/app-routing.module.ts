import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrailsComponent } from './trails/trails.component';
import { TrailInfoComponent } from './trail-info/trail-info.component';
import { TrailsOfUserComponent } from './trails-of-user/trails-of-user.component';
import { CommentsComponent } from './comments/comments.component';

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
    path: 'trails-of-user',
    component: TrailsOfUserComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
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
