import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerComponent } from './Components/pager/pager.component';



@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports:[PaginationModule]
})
export class SharedModule { }
