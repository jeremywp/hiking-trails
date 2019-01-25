import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasserService {

  lonLat;
  trails;

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
  
}
