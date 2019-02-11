import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PasserService } from "../passer.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserTrailsService } from "../trails-of-user/user-trails.service";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit {
  zipCode: number;
  latLon: any;
  trailsList: any;
  public user;
  public hikingUrl: string;
  private mapQuestUrl: string;


  constructor(private httpClient: HttpClient,
    private passer: PasserService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private userTrailsService: UserTrailsService) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      this.userTrailsService.user = user;
      // console.log(this.user);
      
      this.afs.collection('users').doc(this.user.uid).collection('completedTrails').valueChanges()
        .subscribe(data => {
          for (let i = 0; i < data.length; i++){
          this.userTrailsService.completedTrails.push(data[i])}
        });
      this.afs.collection('users').doc(this.user.uid).collection('interestedTrails').valueChanges()
        .subscribe(data => {
          for (let i = 0; i < data.length; i++){
          this.userTrailsService.interestedTrails.push(data[i])}
        });
    });

  }


  updateMapUrl() {
    this.mapQuestUrl = 'http://open.mapquestapi.com/geocoding/v1/address?key=z09V87z5rXEly0yFADXnEMWFbNvH3Bsd&location=' + this.zipCode;
    this.getLngAndLat();
  }

  getLocationData() {
    return this.httpClient.get(this.mapQuestUrl);
  }

  getLngAndLat() {
    this.getLocationData().subscribe(data => {

      this.latLon = data;
      this.latLon = this.latLon.results[0].locations[0].latLng;
      //console.log(this.latLon);
      this.updateHikingUrl();
    });
  }

  updateHikingUrl() {
    this.hikingUrl = 'https://www.hikingproject.com/data/get-trails?lat=' + this.latLon.lat + '&lon=' + this.latLon.lng + '&maxDistance=25&key=200411541-4117e4688ccd63ae5e065df8c7c54b2a';
    this.getTrailsData();
    this.passer.setLonLat(this.latLon);
  }

  getTrailsList() {
    return this.httpClient.get(this.hikingUrl)
  };

  getTrailsData() {
    this.getTrailsList().subscribe(data => {
      this.trailsList = data;
      this.trailsList = this.trailsList.trails;
      //console.log(this.trailsList);
      this.passer.setTrails(this.trailsList);
    });
  }

  getTrails() {
    this.updateMapUrl();
  }

  getTrailIndex(i) {
    this.passer.setTrailIndex(i);
  }
}
