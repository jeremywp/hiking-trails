import { Component } from '@angular/core';
import { SignInService } from './auth/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hiking Trails';
  constructor(public user: SignInService) { }
}
