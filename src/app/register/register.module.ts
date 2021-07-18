import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogInBodyComponent } from './components/log-in/log-in-body/log-in-body.component';



@NgModule({
  declarations: [
    LogInComponent,
    LogInBodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
