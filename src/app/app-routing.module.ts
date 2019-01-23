import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrailsComponent} from "./trails/trails.component";

const routes: Routes = [
  {
    path: 'trails',
    component: TrailsComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
