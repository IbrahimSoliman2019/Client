import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSectionComponent } from './main-section/main-section.component';
import { ExpComponent } from './exp/exp.component';



@NgModule({
  declarations: [MainSectionComponent, ExpComponent],
  imports: [
    CommonModule
  ],
  exports:[ExpComponent]
})
export class ExploreModule { }
