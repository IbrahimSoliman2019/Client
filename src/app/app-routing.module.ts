import{NgModule} from'@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/Components/home/home.component';
import { LogInComponent } from './register/components/log-in/log-in.component';
import { SingupComponent } from './register/components/singup/singup.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LogInComponent},
  {path:"signup",component:SingupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
