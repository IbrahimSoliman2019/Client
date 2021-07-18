import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ComponentsComponent } from './components/components.component';
import { AboutComponent } from './Components/about/about.component';
import { ExploreNearbtComponent } from './Components/explore-nearbt/explore-nearbt.component';
import { PlacesComponent } from './Components/places/places.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { GalaryComponent } from './Components/galary/galary.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';



@NgModule({
  declarations: [ AboutComponent, ExploreNearbtComponent, PlacesComponent, HotelsComponent, GalaryComponent, ContactUsComponent],
  imports: [
    CommonModule
  ],
  exports:[AboutComponent,ExploreNearbtComponent,PlacesComponent,HotelsComponent,GalaryComponent,ContactUsComponent]

})
export class HomeModule { }
