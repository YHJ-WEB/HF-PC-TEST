import {Component, OnInit, AfterViewInit} from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit,OnInit {
    constructor() {
    }

    ngAfterViewInit(): void {
        let swap = new Swiper('.swap-list', {
            pagination: '.swap-pagination',
            slidesPerView: 6,
            loop: false,
            autoplay: 5000,
            paginationClickable: true
        });
    }

    ngOnInit(): void {
    }

}
