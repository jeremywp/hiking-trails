import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: 'app-loginpage', component: LoginpageComponent },

  { path: '', redirectTo: 'app-loginpage', pathMatch: 'full' },
  { path: '**', redirectTo: 'app-loginpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
