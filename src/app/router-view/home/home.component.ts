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

    articleArray = [
        {
            title: '脊柱疾病知识',
            img: 'assets/img/jizhu001.png',
            items: [
                {
                    id: 1,
                    title: '脊柱结核'
                },
                {
                    id: 2,
                    title: '椎间盘突出'
                },
                {
                    id: 3,
                    title: '腰椎间盘突出'
                },
                {
                    id: 4,
                    title: '颈椎病'
                }
            ]
        },
        {
            title: '康复锻炼',
            img: 'assets/img/kangfuduanlian.png',
            items: [
                {
                    id: 1,
                    title: '颈托使用指导'
                },
                {
                    id: 2,
                    title: '下肢功能锻炼'
                },
                {
                    id: 3,
                    title: '颈部功能锻炼'
                }
            ]
        }
    ];

    ngOnInit(): void {
    }

}
