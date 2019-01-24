import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PasserService} from "../passer.service";

@Component({
  selector: 'app-trails-by-id',
  templateUrl: './trails-by-id.component.html',
  styleUrls: ['./trails-by-id.component.scss']
})
export class TrailsByIdComponent implements OnInit {

  trailsList: any;

  constructor(private httpClient: HttpClient,
              private passer: PasserService) { }

  ngOnInit() {
    this.getTrailsList();
    this.setTrailsList();
  }

  getTrailsList() {
    console.log(this.passer.hikingUrl);
    return this.httpClient.get(this.passer.hikingUrl)
  };

  setTrailsList() {
    console.log(this.getTrailsList());
    this.getTrailsList().subscribe(data => {
      this.trailsList = data;
      this.passer.setTrails(data);
      //this.displayTrails();
    });

  }

  displayTrails() {
    console.log(this.passer.getTrails())
  }
}
