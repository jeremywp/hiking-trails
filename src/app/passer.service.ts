import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasserService {

  lonLat;
  trails;
  trailIndex;

  constructor() { }

  setLonLat(e) {
    this.lonLat = e;
  }

  getLonLat() {
    return this.lonLat;
  }

  setTrails (arr) {
    this.trails = arr;
  }

  getTrails () {
    return this.trails;
  }

  setTrailIndex(i) {
    this.trailIndex = i;
  }

  getTrailIndex() {
    return this.trailIndex;
  }
  
}
