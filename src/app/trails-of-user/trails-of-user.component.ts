import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore} from "@angular/fire/firestore";
import {TrailInfoComponent} from "../trail-info/trail-info.component";
import { PasserService } from 'app/passer.service';
import { Router } from '@angular/router';


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

  constructor(private router: Router,
              private passer: PasserService,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private trailInfoComponent: TrailInfoComponent) { }

  ngOnInit() {
    this.user$ = this.trailInfoComponent.user$;
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.afs.collection('users').doc(user.uid).ref.get().then(doc => {
        this.completedTrails = doc.data().completedTrails;
        this.interestedTrails = doc.data().interestedTrails;
      });
    });
  }

  routeToTrail(e) {
    let ary = [];
    ary.push(e);
    this.passer.setTrails(ary);
    this.passer.setTrailIndex(0);
    this.router.navigate(['/trail-info']);
  }
}