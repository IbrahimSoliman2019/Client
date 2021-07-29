import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProperty } from 'src/app/shared/Models/IProperty';
import { HomeService } from '../Services/home.service';

declare const L:any;
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})



export class PlacesComponent implements OnInit {


  prop :IProperty[]=[];

  title = 'Client';
  constructor(private http:HttpClient ,public GlaSer :HomeService , public router :Router){}

  ngOnInit(): void {

    this.GlaSer.Getproperty().subscribe(res=>{
      this.prop=res["data"];
    });



    if (!navigator.geolocation) {
      console.log("location is not supported");

    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coord = position.coords;

      console.log(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`);

      let mymap = L.map('map').setView([coord.latitude, coord.longitude], 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9oYW1lZGdlbmFpZHUiLCJhIjoiY2tyaHFpdzZuMGZwNTMxbzVocmcxNWV1MCJ9.pMKbPeTXX5v9cKU9TyA1fA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);
      let marker = L.marker([coord.latitude, coord.longitude]).addTo(mymap);


    });
    this.watchPosition();

  }

  watchPosition() {
    let deslatitiude = 0;
    let deslongtiude = 0;
    let id = navigator.geolocation.watchPosition((position) => {
    console.log(`lat: ${position.coords.latitude}, long: ${position.coords.longitude}`);

    if (position.coords.latitude === deslatitiude) {
      navigator.geolocation.clearWatch(id);
    }

    }, (err) => {
      console.log(err);

    }, {
      enableHighAccuracy:false,
      timeout:5000,
      maximumAge:0
    }
    );

  
   
  }
}
