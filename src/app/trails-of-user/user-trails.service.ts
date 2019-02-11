import { Injectable } from '@angular/core';
import { DocumentData } from "@angular/fire/firestore";
import { AngularFirestore } from "angularfire2/firestore";
import {User} from "../auth/user";
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class UserTrailsService {
  public user;
  completedTrails: DocumentData[];
  interestedTrails: DocumentData[];
  userCollectionRef;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
    this.userCollectionRef = this.afs.collection<User>('users');
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.afs.collection('users').doc(this.user.uid).collection('completedTrails').valueChanges()
        .subscribe(data => {
          this.completedTrails = data
        });
      this.afs.collection('users').doc(this.user.uid).collection('interestedTrails').valueChanges()
        .subscribe(data => {
          this.interestedTrails = data
        });
    });
  }
}
