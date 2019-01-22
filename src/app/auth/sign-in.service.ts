import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(public afAuth: AngularFireAuth) { }

  signIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.auth.currentUser;
  }

}
