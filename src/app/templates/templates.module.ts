import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports: [HomePageComponent]
})
export class TemplatesModule { }
