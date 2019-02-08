import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import {UserTrailsService} from "./user-trails.service";
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore} from "@angular/fire/firestore";
import {TrailInfoComponent} from "../trail-info/trail-info.component";


@Component({
  selector: 'app-trails-of-user',
  templateUrl: './trails-of-user.component.html',
  styleUrls: ['./trails-of-user.component.scss']
})
export class TrailsOfUserComponent implements OnInit {
  
   completedTrails = [];
   interestedTrails = [];
  user: User;
  user$;

  constructor(private apiGetter: ApiGetterService,
              private userTrailsService: UserTrailsService,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private trailInfoComponent: TrailInfoComponent) { }

  ngOnInit() {
    this.user$ = this.trailInfoComponent.user$;
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      // console.log(this.user);
      this.afs.collection('users').doc(user.uid).ref.get().then(doc => {
        console.log(this.completedTrails);
        console.log(doc.data().completedTrails);
        this.completedTrails = doc.data().completedTrails;
        this.interestedTrails = doc.data().interestedTrails;
        
      });
    });
  }

}
