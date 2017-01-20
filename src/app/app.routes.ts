import {Routes} from '@angular/router';
import {HomeComponent} from './router-view/home/home.component';
import {ArticleListComponent} from './router-view/article/article-list/article-list.component';
import {ArticleDetailComponent} from './router-view/article/article-detail/article-detail.component';
import {ArticleComponent} from './router-view/article/article.component';
import {ToolComponent} from './router-view/tool/tool.component';
import {BookingServiceComponent} from './router-view/booking-service/booking-service.component';
import {ServiceDetailComponent} from './router-view/service-detail/service-detail.component';
import {OrderListComponent} from './router-view/order-list/order-list.component'

export const ROOT_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'article',
        component: ArticleComponent,
        children: [
            {
                path: '',
                component: ArticleListComponent
            },
            {
                path: 'article-list',
                component: ArticleListComponent,
            },
            {
                path: 'article-detail/:id',
                component: ArticleDetailComponent
            }
        ]
    },
    {
        path: 'tool/:id',
        component: ToolComponent
    },
    {
        path: 'bookingService',
        component: BookingServiceComponent
    },
    {
        path: 'serviceDetail',
        component: ServiceDetailComponent
    },
    {
        path: 'orderList',
        component: OrderListComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
