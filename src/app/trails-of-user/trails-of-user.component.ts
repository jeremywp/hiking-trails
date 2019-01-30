import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';


@Component({
  selector: 'app-trails-of-user',
  templateUrl: './trails-of-user.component.html',
  styleUrls: ['./trails-of-user.component.scss']
})
export class TrailsOfUserComponent implements OnInit {

  usid = 103909;
  users = [
    {
      id: 102903,
      displayName: 'some guy'
    },
    {
      id: 102940,
      displayName: 'some other guy'
    },
    {
      id: 103909,
      displayName: 'the correct guy'
    }
  ];
  currentUser;


  constructor(private apiGetter: ApiGetterService) { }

  ngOnInit() {
    this.currentUser = this.findCurrentUser();
    console.log(this.currentUser);
  }

  findCurrentUser() {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == this.usid) {
        return this.users[i];
      }
    }
  }




}
