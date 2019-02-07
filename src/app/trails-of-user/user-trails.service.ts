import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { AngularFirestore } from "angularfire2/firestore";
import {Trail} from "../trail"
import {User} from "../auth/user";

@Injectable({
  providedIn: 'root'
})
export class UserTrailsService {
  private trailsInterestedRef: AngularFirestoreDocument<Trail>;
  private trailsCompletedRef: AngularFirestoreDocument<Trail>;
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
