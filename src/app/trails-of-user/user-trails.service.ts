import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  DocumentChangeAction
} from "@angular/fire/firestore";
import { AngularFirestore } from "angularfire2/firestore";
import {Trail} from "../trail";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {SignInService} from "../auth/sign-in.service";
import {TrailInfoComponent} from "../trail-info/trail-info.component";
import {TrailsComponent} from "../trails/trails.component";
import {User} from "../auth/user";

@Injectable({
  providedIn: 'root'
})
export class UserTrailsService {
  private trailsInterestedRef: AngularFirestoreDocument<Trail>;
  private trailsCompletedRef: AngularFirestoreDocument<Trail>;
  private trailsComponent: TrailsComponent;
  public user;
  completedTrails = [];
  interestedTrails = [];
  userCollectionRef;

  constructor(private afs: AngularFirestore) {
    this.userCollectionRef = this.afs.collection<User>('users');
  }



  removeCompletedTrail() {
    return this.trailsCompletedRef.delete()
      .then(_ => console.log('Success on remove'))
      .catch(error => console.log('remove', error));
  }

  removeInterestedTrail() {
    return this.trailsInterestedRef.delete()
      .then(_ => console.log('Success on remove'))
      .catch(error => console.log('remove', error));
  }
}
