import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import {UserTrailsService} from "./user-trails.service";
import {Trail} from "../trail";
import {Observable} from "rxjs";


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
  private completedTrails$: Observable<Trail>;
  private interestedTrails$: Observable<Trail>;
  


  constructor(private apiGetter: ApiGetterService,
              private userTrailsService: UserTrailsService) { }

  ngOnInit() {
    this.currentUser = this.findCurrentUser();
    console.log(this.currentUser);
    this.completedTrails$ = this.userTrailsService.getCompletedTrailsObservable();
    this.interestedTrails$ = this.userTrailsService.getInterestedTrailsObservable();
    this.userTrailsService.getUser();
  }

  findCurrentUser() {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].id == this.usid) {
        return this.users[i];
      }
    }
  }








}
