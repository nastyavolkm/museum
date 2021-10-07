import { Component, Input } from '@angular/core';

import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';

SwiperCore.use([Pagination, Autoplay, Navigation]);

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent {
  @Input() images!: string[];
}
