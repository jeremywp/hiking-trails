import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrailsComponent} from "./trails/trails.component";
import {TrailsByIdComponent} from "./trails-by-id/trails-by-id.component";

const routes: Routes = [
  {
    path: 'search',
    component: TrailsComponent
  },
  {
    path: 'trails',
    component: TrailsByIdComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
