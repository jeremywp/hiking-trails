import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import {TrailsComponent} from "../trails/trails.component";
import {PasserService} from "../passer.service";
import {Trail} from "../trail";
import {UserTrailsService} from "../trails-of-user/user-trails.service";
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../auth/user';
import {combineLatest, switchMap} from 'rxjs/operators';
import {SignInService} from "../auth/sign-in.service";
import {Observable, of} from "rxjs";
import { map } from 'rxjs/operators';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.scss']
})
export class TrailInfoComponent implements OnInit {

  trailIndex:number;
  trails;
  completedTrailsRef;
  interestedTrailsRef;
  weathers;
  weatherDates = [];
  weatherData = [];
  completed: boolean;
  interested: boolean;
  user;
  userCollectionRef;
  user$: Observable<User[]>;

  constructor(private apiGetter: ApiGetterService,
              private trailComponent: TrailsComponent,
              private passer: PasserService,
              private userTrailsService: UserTrailsService,
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth
              ) {
    this.userCollectionRef = this.afs.collection<User>('users');
    this.user$ = this.userCollectionRef.valueChanges();

    afAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  async ngOnInit() {
    await (this.userTrailsService.user = this.user);
    await (this.completedTrailsRef = this.afs.collection('users').doc(this.user.uid).collection('completedTrails'));
    await (this.interestedTrailsRef = this.afs.collection('users').doc(this.user.uid).collection('interestedTrails'));
    this.trails = this.passer.getTrails();
    this.trailIndex = this.passer.getTrailIndex();
    //console.log (this.trails[this.trailIndex]);
    this.apiGetter.getTrails().subscribe(res => {
      this.apiGetter.getWeather(this.trails[this.trailIndex].latitude, this.trails[this.trailIndex].longitude).subscribe(res => {
        this.weathers = res;
        this.weathers = this.weathers.list;
        this.filterWeather();
      })
    });
    if (this.userTrailsService.completedTrails.find( _ => _.id == this.trails[this.trailIndex].id)){
      this.completed = true;
    }
    console.log(this.userTrailsService.completedTrails);

  }

  updateUser(user, trail) {
    this.userCollectionRef.doc(user.uid).update({
      completedTrail: trail, interested: !trail.interested
    })
  }

  filterWeather() {
    let dateMatch = false;
    for(let i = 0; i < this.weathers.length; i++) {
      for(let d = 0; d < this.weatherDates.length; d++) {
        if(this.weathers[i].dt_txt.slice(0,10) == this.weatherDates[d]) {
          dateMatch = true;
        }
      }
      if(!dateMatch) {
        this.weatherDates.push(this.weathers[i].dt_txt.slice(0,10));
        this.weatherData.push(this.weathers[i].weather[0]);
      }
      dateMatch = false;
    }
  }

  completedFunc(user, trail:Trail) {
    this.completed = !this.completed;
    if (this.completed == true) {
      console.log(this.userTrailsService.completedTrails);
      this.saveCompletedTrail(user, trail)
    } else {
      console.log('not complete');
      this.removeCompletedTrail(user, trail)
    }
  }

  interestedFunc(user, trail:Trail) {
    this.interested = !this.interested;
    if (this.interested == true) {
      console.log('interested');
      this.saveInterestedTrail(user, trail)
    } else {
      console.log('not interested');
      this.removeInterestedTrail()
    }
  }

  turnToWords(string) {
    return string.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/^./, function(str){ return str.toUpperCase(); });
  }

  saveCompletedTrail (user, trail: Trail) {
    console.log('trail saved on component side');
    this.userTrailsService.completedTrails.push(trail);
    this.userCollectionRef.doc(user.uid).update({
      completedTrails: this.userTrailsService.completedTrails}, {merge:true});
  }

  saveInterestedTrail (user, trail: Trail) {
    console.log('trail saved on component side');
    this.userTrailsService.interestedTrails.push(trail);
    this.userCollectionRef.doc(user.uid).update({
      interestedTrails: this.userTrailsService.interestedTrails});
  }

  removeCompletedTrail(user, trail) {
    let i = this.userTrailsService.completedTrails.indexOf(trail);
    this.userTrailsService.completedTrails.splice(i,1);
    this.userCollectionRef.doc(user.uid).update({
      completedTrails: this.userTrailsService.completedTrails}, {merge:true});
  }

  removeInterestedTrail() {
    this.userTrailsService.removeInterestedTrail();
  }
  updateCompleted(){
  }
  updateInterested(){
    
  }
}
