import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './hoteldetail/description/description.component';
import { RoomsComponent } from './hoteldetail/rooms/rooms.component';
import { LocationComponent } from './hoteldetail/location/location.component';
import { ReviewsComponent } from './hoteldetail/reviews/reviews.component';
import { HotelDetailComponent } from './hoteldetail/hotel-detail.component';
import { ExploreRoutingModule } from './hoteldetail/Explore-Routing';



@NgModule({
  declarations: [DescriptionComponent,
    RoomsComponent,
    LocationComponent,
    ReviewsComponent,
    HotelDetailComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule
  ],

})
export class ExploreModule { }
