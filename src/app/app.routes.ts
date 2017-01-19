
import {Routes} from '@angular/router';
import {HomeComponent} from './router-view/home/home.component';

export const ROOT_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
