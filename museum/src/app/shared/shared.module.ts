import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { MainSliderComponent } from './main-slider/main-slider.component';



@NgModule({
  declarations: [
    MainSliderComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
  ],
  exports: [MainSliderComponent],
})
export class SharedModule { }
