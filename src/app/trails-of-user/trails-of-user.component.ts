import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import {UserTrailsService} from "./user-trails.service";
import {Trail} from "../trail";
import {Observable} from "rxjs";
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-trails-of-user',
  templateUrl: './trails-of-user.component.html',
  styleUrls: ['./trails-of-user.component.scss']
})
export class TrailsOfUserComponent implements OnInit {
 
  
  usid = 0;
  users = [];
  currentUser;
  private completedTrails$: Observable<Trail>;
  private interestedTrails$: Observable<Trail>;
  user: User;
  


  constructor(private apiGetter: ApiGetterService,
              private userTrailsService: UserTrailsService,
              private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      console.log(this.user);

    });
    this.currentUser = this.findCurrentUser();
    
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
