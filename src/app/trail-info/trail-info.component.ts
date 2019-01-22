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

  constructor(private apiGetter: ApiGetterService) { }

  ngOnInit() {
    this.apiGetter.getTrails().subscribe(res => {
      this.trails = res.data;
      console.log(this.trails);
    });
  }

}
