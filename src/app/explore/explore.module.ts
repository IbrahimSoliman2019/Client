import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './hoteldetail/description/description.component';
import { RoomsComponent } from './hoteldetail/rooms/rooms.component';
import { LocationComponent } from './hoteldetail/location/location.component';
import { ReviewsComponent } from './hoteldetail/reviews/reviews.component';
import { HotelDetailComponent } from './hoteldetail/hotel-detail.component';
import { ExploreRoutingModule } from './hoteldetail/Explore-Routing';
import { MainSectionComponent } from './main-section/main-section.component';
import { ExpComponent } from './exp/exp.component';
import { AgmCoreModule } from '@agm/core';
import { ExsearchComponent } from './exp/expsearch/exsearch/exsearch.component';



@NgModule({
  declarations: [DescriptionComponent,
    RoomsComponent,
    LocationComponent,
    ReviewsComponent,
    HotelDetailComponent,
    MainSectionComponent,
    ExpComponent,
    ExsearchComponent,
  ],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    AgmCoreModule
  ],


  exports:[ExpComponent]
})
export class ExploreModule { }
