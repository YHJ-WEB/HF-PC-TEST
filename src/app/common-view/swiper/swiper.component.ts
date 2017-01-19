import { Component, OnInit ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html'
})
export class SwiperComponent implements OnInit ,AfterViewInit{

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit():void {
    let swap = new Swiper('.swap-list', {
      pagination: '.swap-pagination',
      slidesPerView: 3,
      // spaceBetween: 30,
      loop: false,
      autoplay: 5000,
      paginationClickable: true
    });

  }
}
