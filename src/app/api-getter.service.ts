import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGetterService {

  constructor(private http: HttpClient) {}
  private trailsUrl = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=25&key=200411541-4117e4688ccd63ae5e065df8c7c54b2a';

  getTrails(): any {
    return this.http.get(this.trailsUrl);
  }

  getWeather(lat, long) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=9a5f463a816f2fd827772c65f14241dc`);
  }

}