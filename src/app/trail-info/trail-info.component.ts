import { Component, OnInit } from '@angular/core';
import { ApiGetterService } from '../api-getter.service';

@Component({
  selector: 'app-trail-info',
  templateUrl: './trail-info.component.html',
  styleUrls: ['./trail-info.component.scss']
})
export class TrailInfoComponent implements OnInit {

  trailIndex = 0;
  trails;
  weather;
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday']

  constructor(private apiGetter: ApiGetterService) { }

  ngOnInit() {
    this.apiGetter.getTrails().subscribe(res => {
      this.trails = res.trails;
      console.log(this.trails);
      this.apiGetter.getWeather(this.trails[this.trailIndex].latitude, this.trails[this.trailIndex].longitude).subscribe(res => {
        this.weather = res;
        this.weather.list.slice(0,5);
        console.log(this.weather);
      })
    });
    
  }

  turnToWords(string) {
    return string.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/^./, function(str){ return str.toUpperCase(); });
  }

}
