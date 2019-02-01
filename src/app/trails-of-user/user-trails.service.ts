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

@Injectable({
  providedIn: 'root'
})
export class UserTrailsService {
  private trailsInterestedRef: AngularFirestoreDocument<Trail>;
  private trailsCompletedRef: AngularFirestoreDocument<Trail>;
  private trailsComponent: TrailsComponent;
  public user;

  constructor(private db: AngularFirestore,
              private signInService: SignInService) {

  }

  getUser() {
    return this.signInService.user;

    return this.db.collection(`user`, ref => ref.where(`uid`, `==`, `ODbJRRhVa3NIGLqhRLwVmzjdBLJ3`));
    
    //this.trailsCompletedRef = this.db.doc<Trail>(`user.uid.completedTrails`);

  }



  getInterestedTrailsObservable(): Observable<Trail> {
    return this.trailsInterestedRef.valueChanges()
  }

  /*getInterestedTrailsObservable(): Observable<Trail[]> {
    return this.trailsInterestedRef.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<Trail>[]): Trail[] => {
          return items.map((item: DocumentChangeAction<Trail>): Trail => {
            return {
              id: item.payload.doc.data().id,
              name: item.payload.doc.data().name,
              type: item.payload.doc.data().type,
              summary: item.payload.doc.data().summary,
              difficulty: item.payload.doc.data().difficulty,
              stars: item.payload.doc.data().stars,
              starVotes: item.payload.doc.data().starVotes,
              location: item.payload.doc.data().location,
              url: item.payload.doc.data().url,
              imgSqSmall: item.payload.doc.data().imgSqSmall,
              imgSmall: item.payload.doc.data().imgSmall,
              imgSmallMed: item.payload.doc.data().imgSmallMed,
              imgMedium: item.payload.doc.data().imgMedium,
              length: item.payload.doc.data().length,
              ascent: item.payload.doc.data().ascent,
              descent: item.payload.doc.data().descent,
              high: item.payload.doc.data().high,
              low: item.payload.doc.data().low,
              longitude: item.payload.doc.data().longitude,
              latitude: item.payload.doc.data().latitude,
              conditionStatus: item.payload.doc.data().conditionStatus,
              conditionDetails: item.payload.doc.data().conditionDetails,
              conditionDate: item.payload.doc.data().conditionDate
            }
          })
        })
      )
  }*/

  getCompletedTrailsObservable(): Observable<Trail> {
    return this.trailsCompletedRef.valueChanges();
  }

  /*getCompletedTrailsObservable(): Observable<Trail[]> {
    return this.trailsCompletedRef.snapshotChanges()
      .pipe(
        map((items: DocumentChangeAction<Trail>[]): Trail[] => {
          return items.map((item: DocumentChangeAction<Trail>): Trail => {
            return {
              id: item.payload.doc.data().id,
              name: item.payload.doc.data().name,
              type: item.payload.doc.data().type,
              summary: item.payload.doc.data().summary,
              difficulty: item.payload.doc.data().difficulty,
              stars: item.payload.doc.data().stars,
              starVotes: item.payload.doc.data().starVotes,
              location: item.payload.doc.data().location,
              url: item.payload.doc.data().url,
              imgSqSmall: item.payload.doc.data().imgSqSmall,
              imgSmall: item.payload.doc.data().imgSmall,
              imgSmallMed: item.payload.doc.data().imgSmallMed,
              imgMedium: item.payload.doc.data().imgMedium,
              length: item.payload.doc.data().length,
              ascent: item.payload.doc.data().ascent,
              descent: item.payload.doc.data().descent,
              high: item.payload.doc.data().high,
              low: item.payload.doc.data().low,
              longitude: item.payload.doc.data().longitude,
              latitude: item.payload.doc.data().latitude,
              conditionStatus: item.payload.doc.data().conditionStatus,
              conditionDetails: item.payload.doc.data().conditionDetails,
              conditionDate: item.payload.doc.data().conditionDate
            }
          })
        })
      )
  }*/

  saveInterestedTrail(trail: Trail) {
    console.log(this.user);
    this.signInService.interested.push(trail);
    this.signInService.updateUserData(this.user);
    // data.interested.push(trail);
    // console.log(data);
  }

  saveCompletedTrail(trail: Trail) {
    console.log(this.user);
    this.signInService.completed.push(trail);
    this.signInService.updateUserData(this.user);
    // data.interested.push(trail);
    // console.log(data);
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
