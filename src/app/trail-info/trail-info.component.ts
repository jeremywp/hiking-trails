import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';
import {TrailsComponent} from "../trails/trails.component";
import {PasserService} from "../passer.service";
import {Trail} from "../trail";
import {UserTrailsService} from "../trails-of-user/user-trails.service";

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.scss']
})
export class TrailInfoComponent implements OnInit {

  trailIndex:number;
  trails;
  weathers;
  weatherDates = [];
  weatherData = [];
  completed: boolean = false;
  interested: boolean = false;

  constructor(private apiGetter: ApiGetterService,
              private trailComponent: TrailsComponent,
              private passer: PasserService,
              private userTrailsService: UserTrailsService) { }

  ngOnInit() {
    this.trails = this.passer.getTrails();
    this.trailIndex = this.passer.getTrailIndex();
    console.log (this.trails[this.trailIndex]);
    this.apiGetter.getTrails().subscribe(res => {
      this.apiGetter.getWeather(this.trails[this.trailIndex].latitude, this.trails[this.trailIndex].longitude).subscribe(res => {
        this.weathers = res;
        this.weathers = this.weathers.list;
        this.filterWeather();
      })
    });
  }

  ngOnChanges() {
    if (this.completed == true) {
      this.saveCompletedTrail(this.trails[this.trailIndex])
    } else {
      this.removeCompletedTrail()
    }

    if (this.interested == true) {
      this.saveInterestedTrail(this.trails[this.trailIndex])
    } else {
      this.removeInterestedTrail()
    }


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

  turnToWords(string) {
    return string.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/^./, function(str){ return str.toUpperCase(); });
  }

  saveCompletedTrail (trail: Trail) {
    this.userTrailsService.saveCompletedTrail(trail);
  }

  saveInterestedTrail (trail: Trail) {
    this.userTrailsService.saveInterestedTrail(trail);
  }

  private removeCompletedTrail() {
    this.userTrailsService.removeCompletedTrail();
  }

  private removeInterestedTrail() {
    this.userTrailsService.removeInterestedTrail();
  }
}
