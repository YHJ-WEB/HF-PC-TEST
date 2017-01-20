import {Component, OnInit, Input, AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit,OnInit {

    @Input() isHome: boolean;
    private scrollTop: boolean = false;

    constructor() {
    }

    ngOnInit() {
        console.log(this.isHome);
        $(window).scroll(function () {
            this.scrollTop = $(this).scrollTop() > 400;
        })
    }

    ngAfterViewInit(): void {
        $(window).scroll(function () {
            this.scrollTop = $(this).scrollTop() > 400;
        })
    }

    linkToTitleById(id: string): void {
        $("html, body").animate({scrollTop: $("#" + id).offset().top}, 1000);
    }
}
