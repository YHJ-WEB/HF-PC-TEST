import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-article-item',
    templateUrl: './article-item.component.html',
    styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    @Input() articleItem: {};

    routeToLink(item): void {
        let link = ["/article/article-detail", item.id];
        this.router.navigate(link);
    }
}
