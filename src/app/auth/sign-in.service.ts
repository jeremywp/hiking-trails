import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      }else {
        return authState.uid;

      }
    }) 
  );

  displayName = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      }else {
        return authState.displayName;

      }
    }) 
  );

  constructor(public afAuth: AngularFireAuth) { }

  signIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {
      console.log(user);
    });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

}
