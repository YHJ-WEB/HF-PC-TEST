import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './router-view/home/home.component';
import { ROOT_ROUTES } from './app.routes';
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
import { ServerComponent } from './router-view/home/server.component';
import { NursingComponent } from './router-view/home/nursing.component';
import { HeaderComponent } from './common-view/header/header.component';
import { SwiperComponent } from './common-view/swiper/swiper.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
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
        ServerComponent,
        NursingComponent,
        HeaderComponent,
        SwiperComponent
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
