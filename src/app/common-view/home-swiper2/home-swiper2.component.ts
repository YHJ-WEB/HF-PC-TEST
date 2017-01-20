import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home-swiper2',
  templateUrl: './home-swiper2.component.html',
  styleUrls: ['./home-swiper2.component.scss']
})
export class HomeSwiper2Component implements AfterViewInit,OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
