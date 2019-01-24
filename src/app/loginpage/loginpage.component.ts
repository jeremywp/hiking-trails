import { Component, OnInit } from '@angular/core';
import { SignInService } from '../auth/sign-in.service'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(public user: SignInService) { }

  ngOnInit() {
  }

}
