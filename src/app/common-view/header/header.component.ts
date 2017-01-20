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
        let vm = this;
        $(window).scroll(function () {
            vm.scrollTop = $(this).scrollTop() > 420;
        })
    }

    linkToTitleById(id: string): void {
        let idLen = $("#" + id).length;
        if (idLen == 0) {
            let link = this.router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    link.unsubscribe();
                    $("html, body").animate({scrollTop: $("#" + id).offset().top}, 500);
                }
            });
            this.router.navigate(["/home"]);
        } else {
            $("html, body").animate({scrollTop: $("#" + id).offset().top}, 500);
        }
    }
}
