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
  latLong: any;
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
       // @ts-ignore
       this.latLong = data.results[0].locations[0].latLng;
       this.updateHikingUrl();
     });


  }

  async updateHikingUrl () {
    await (this.hikingUrl = 'https://www.hikingproject.com/data/get-trails?lat=' + this.latLong.lat + '&lon=' + this.latLong.lng + '&maxDistance=10&key=200411541-4117e4688ccd63ae5e065df8c7c54b2a');
    this.passer.setHikingUrl(this.hikingUrl);
  }


getTrails() {
    this.updateMapUrl();

}

}
