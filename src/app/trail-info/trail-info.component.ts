import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.scss']
})
export class TrailInfoComponent implements OnInit {

  trailIndex = 9;
  trails;
  weathers;
  weatherDates = [];
  weatherData = [];

  constructor(private apiGetter: ApiGetterService) { }

  ngOnInit() {
    this.apiGetter.getTrails().subscribe(res => {
      this.trails = res.trails;
      this.apiGetter.getWeather(this.trails[this.trailIndex].latitude, this.trails[this.trailIndex].longitude).subscribe(res => {
        this.weathers = res;
        this.weathers = this.weathers.list;
        this.filterWeather();
      })
    });
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

}
