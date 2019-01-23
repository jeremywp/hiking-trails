import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasserService {

  lonLat;

  constructor() { }

  setLonLat(e) {
    this.lonLat = e;
  }

  getLonLat() {
    return this.lonLat;
  }
  
}
