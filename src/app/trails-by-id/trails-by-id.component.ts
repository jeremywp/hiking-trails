import { Component, OnInit } from '@angular/core';
import {TrailsComponent} from "../trails/trails.component";

@Component({
  selector: 'app-trails-by-id',
  templateUrl: './trails-by-id.component.html',
  styleUrls: ['./trails-by-id.component.scss']
})
export class TrailsByIdComponent implements OnInit {

  trailsList: any;

  constructor(trailsComponent: TrailsComponent) { }

  ngOnInit() {
    this.getTrailsList();
  }

  getTrailsList() {

  }

}
