import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home-swiper1',
  templateUrl: './home-swiper1.component.html',
  styleUrls: ['./home-swiper1.component.scss']
})
export class HomeSwiper1Component implements AfterViewInit,OnInit {

  constructor() { }

  ngAfterViewInit():void {
    let swap = new Swiper('.swap-list', {
      pagination: '.swap-pagination',
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      autoplay: 5000,
      paginationClickable: true
    });
  }

  ngOnInit() {
  }

}
