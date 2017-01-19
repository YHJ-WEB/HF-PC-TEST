import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-nursing',
    templateUrl: 'nursing.component.html'
})
export class NursingComponent implements OnInit,AfterViewInit {

    constructor() {
    }

    ngOnInit() {
    }

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


}
