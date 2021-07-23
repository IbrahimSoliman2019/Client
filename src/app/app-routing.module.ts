import{NgModule} from'@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelDetailComponent } from './explore/hoteldetail/hotel-detail.component';
import { HomeComponent } from './home/Components/home/home.component';
import { LogInComponent } from './register/components/log-in/log-in.component';
import { SingupComponent } from './register/components/singup/singup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LogInComponent},
  {path:"signup",component:SingupComponent},
  {path:"hoteldetails",component:HotelDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
