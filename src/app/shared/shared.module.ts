import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { PagerComponent } from './Components/pager/pager.component';

import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';





@NgModule({

  declarations: [  HeaderComponent, FooterComponent,PagerComponent],

  imports: [

    CommonModule,

    PaginationModule.forRoot()

  ],

  exports:[PaginationModule,PagerComponent]

})

export class SharedModule { }