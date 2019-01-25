import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private users: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.users = db.collection<any>('users');
  }
}
