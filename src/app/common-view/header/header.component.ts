import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit,OnInit {

    @Input() isHome: boolean;
    private scrollTop: boolean = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        console.log(this.isHome);
    }

    ngAfterViewInit(): void {
        $(window).scroll(function () {
            this.scrollTop = $(this).scrollTop() > 400;
        })
    }

    linkToTitleById(id: string): void {
        let idLen = $("#" + id).length;
        if (idLen == 0) {
            this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.router.navigate(["/home"]);
                    $("html, body").animate({scrollTop: $("#" + id).offset().top}, 500);
                }
            });
        } else {
            $("html, body").animate({scrollTop: $("#" + id).offset().top}, 500);
        }
    }
}
