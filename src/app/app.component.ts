import { Component } from '@angular/core';
import { SignInService } from './auth/sign-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: SignInService) { }
  title = 'Hiking Trails';
  
}
