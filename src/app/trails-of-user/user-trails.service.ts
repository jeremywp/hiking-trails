import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, DocumentData } from "@angular/fire/firestore";
import { AngularFirestore } from "angularfire2/firestore";
import {User} from "../auth/user";
import {AngularFireAuth} from "@angular/fire/auth";
import {Trail} from "../trail";

@Injectable({
  providedIn: 'root'
})
export class UserTrailsService {
  private trailsInterestedRef: AngularFirestoreDocument<Trail>;
  private trailsCompletedRef: AngularFirestoreDocument<Trail>;
  public user;
<<<<<<< HEAD
  completedTrails = [];
  interestedTrails = [];
=======
  completedTrails: DocumentData[];
  interestedTrails: DocumentData[];
>>>>>>> 720c77ef803c099e19ef2456849f63991862c091
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

<<<<<<< HEAD
=======
  removecommentsTrail() {
    return this.trailsCommentsRef.delete()
      .then(_ => console.log('Success on remove'))
      .catch(error => console.log('remove', error));

  }

>>>>>>> 720c77ef803c099e19ef2456849f63991862c091
}
