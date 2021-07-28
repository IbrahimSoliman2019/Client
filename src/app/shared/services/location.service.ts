// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';
// import { HandleErrorService } from 'src/app/core/handle-error.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class LocationService {
//   longitude: number;
//   latitude: number;
//   CountryName: any;

//   constructor(
//     private http: HttpClient,
//     private handleerrorservice: HandleErrorService
//   ) {}
//   getCountryName() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         this.longitude = position.coords.longitude;
//         this.latitude = position.coords.latitude;
//       });
//     }
//     return this.http.get(
//       `http://maps.googleapis.com/maps/api/geocode/json?latlng=${this.latitude.toString()},${this.longitude.toString()}&sensor=false`
//     );
//   }
//   getIpAddress() {
//     return this.http
//       .get('https://api.ipify.org/?format=json')
//       .pipe(catchError(this.handleerrorservice.handleError));
//   }
//   getGEOLocation(ip) {
//     // Update your api key to get from https://ipgeolocation.io
//     let url =
//       'https://api.ipgeolocation.io/ipgeo?apiKey=36af9b44f2e242aebe8b433b74556071&ip=' +
//       ip;
//     return this.http
//       .get(url)
//       .pipe(catchError(this.handleerrorservice.handleError));
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude:string;
  longitude:string;
  country_name:string;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  getUserLocation() {
    return this.http.get<Location>('https://ipapi.co/json/')
  }
}
