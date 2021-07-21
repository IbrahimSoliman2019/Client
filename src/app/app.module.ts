import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';

import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {ExploreModule} from './explore/explore.module';
import {HomeModule} from './home/home.module';
import {RegisterModule} from './register/register.module'
import { RouterLink, RouterModule } from '@angular/router';
import { ErrorInterceptorService } from './core/Interceptors/error-interceptor.service';
import { DescriptionComponent } from './hoteldetail/description/description.component';
import { RoomsComponent } from './hoteldetail/rooms/rooms.component';
import { LocationComponent } from './hoteldetail/location/location.component';
import { ReviewsComponent } from './hoteldetail/reviews/reviews.component';
//import {SharedModule} from './shared/shared/shared.module'



@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    RoomsComponent,
    LocationComponent,
    ReviewsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ExploreModule,
    HomeModule,
    RegisterModule,
    RouterModule,
    FormsModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
