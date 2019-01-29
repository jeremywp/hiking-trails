import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PasserService} from "../passer.service";

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit {
  zipCode: number;
  latLon: any;
  trailsList: any;
  public hikingUrl: string;
  private mapQuestUrl: string;


  constructor(private httpClient: HttpClient,
              private passer: PasserService) {
  }

  ngOnInit() {
  }


  updateMapUrl () {
    this.mapQuestUrl = 'http://open.mapquestapi.com/geocoding/v1/address?key=z09V87z5rXEly0yFADXnEMWFbNvH3Bsd&location=' + this.zipCode;
    this.getLngAndLat();
  }

  getLocationData () {
    return this.httpClient.get(this.mapQuestUrl);
  }

   getLngAndLat () {
     this.getLocationData().subscribe(data => {

       this.latLon = data;
       this.latLon = this.latLon.results[0].locations[0].latLng;
       console.log(this.latLon);
       this.updateHikingUrl();
     });
    }

  updateHikingUrl () {
    this.hikingUrl = 'https://www.hikingproject.com/data/get-trails?lat=' + this.latLon.lat + '&lon=' + this.latLon.lng + '&maxDistance=10&key=200411541-4117e4688ccd63ae5e065df8c7c54b2a';
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
      console.log(this.trailsList);
      this.passer.setTrails(this.trailsList);
    });
  }

  getTrails() {
      this.updateMapUrl();
  }

}
