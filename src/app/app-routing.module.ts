import{NgModule} from'@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpComponent } from './explore/exp/exp.component';
import { HomeComponent } from './home/Components/home/home.component';
import { LogInComponent } from './register/components/log-in/log-in.component';
import { SingupComponent } from './register/components/singup/singup.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LogInComponent},
  {path:"signup",component:SingupComponent},
  {path:"exp",component:ExpComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
