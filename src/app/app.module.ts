import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ArticleListComponent} from './router-view/article/article-list/article-list.component';
import {ArticleDetailComponent} from './router-view/article/article-detail/article-detail.component';
import {HomeComponent} from './router-view/home/home.component';
import {ROOT_ROUTES} from './app.routes';
import { ArticleItemComponent } from './common-view/article-item/article-item.component';
import { ArticleComponent } from './router-view/article/article.component';
import { ToolComponent } from './router-view/tool/tool.component';
// import {FooterModule} from "./common-view/footer/footer.module";
import {RouterModule} from '@angular/router';

import { BookingServiceComponent } from './router-view/booking-service/booking-service.component';
import { ServiceDetailComponent } from './router-view/service-detail/service-detail.component';
import { OrderListComponent } from './router-view/order-list/order-list.component';
import { ServiceContentComponent } from './common-view/service-content/service-content.component';
import { ServiceInfoComponent } from './common-view/service-info/service-info.component';
import { ServiceSubmitComponent } from './common-view/service-submit/service-submit.component';
import { ServiceDetailItemComponent } from './common-view/service-detail-item/service-detail-item.component';
import { PatientInfoComponent } from './common-view/patient-info/patient-info.component';
import { OrderListItemComponent } from './common-view/order-list-item/order-list-item.component';
import { OrderInfoComponent } from './common-view/order-info/order-info.component';
import { HomeToolComponent } from './common-view/home-tool/home-tool.component';
import { FooterComponent } from './common-view/footer/footer.component';
import { HeaderComponent } from './common-view/header/header.component';
import { HomeCategoryComponent } from './common-view/home-category/home-category.component';
import { HomeSwiper1Component } from './common-view/home-swiper1/home-swiper1.component';
import { HomeSwiper2Component } from './common-view/home-swiper2/home-swiper2.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleListComponent,
        ArticleDetailComponent,
        HomeComponent,
        ArticleItemComponent,
        ArticleComponent,
        ToolComponent,
        BookingServiceComponent,
        ServiceDetailComponent,
        OrderListComponent,
        ServiceContentComponent,
        ServiceInfoComponent,
        ServiceSubmitComponent,
        ServiceDetailComponent,
        ServiceDetailItemComponent,
        PatientInfoComponent,
        OrderListItemComponent,
        OrderInfoComponent,
        HomeToolComponent,
        FooterComponent,
        HeaderComponent,
        HomeCategoryComponent,
        HomeSwiper1Component,
        HomeSwiper2Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROOT_ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
