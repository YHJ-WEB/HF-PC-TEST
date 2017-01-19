
import {Routes} from '@angular/router';
import {HomeComponent} from './router-view/home/home.component';
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
