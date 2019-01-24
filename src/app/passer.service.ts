import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasserService {

  lonLat;
  hikingUrl;
  trails;

  constructor() { }

  setLonLat(e) {
    this.lonLat = e;
  }

  getLonLat() {
    return this.lonLat;
  }

  setHikingUrl (url) {
    this.hikingUrl = url;
  }

  getHikingUrl () {
    return this.hikingUrl;
  }

  setTrails (trails) {
    this.trails = trails;
  }

  getTrails () {
    return this.trails;
  }
  
}
