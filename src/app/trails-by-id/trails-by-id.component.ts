import {Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PasserService} from "../passer.service";
import {TrailsComponent} from "../trails/trails.component";

@Component({
  selector: 'app-trails-by-id',
  templateUrl: './trails-by-id.component.html',
  styleUrls: ['./trails-by-id.component.scss']
})
export class TrailsByIdComponent implements OnInit {

  trailsList: any;
  private hikingUrl;

  constructor(private httpClient: HttpClient,
              private trailComponent: TrailsComponent,
              private passer: PasserService) { }

  ngOnInit() {
  }




  setTrailsList() {
  }
}
