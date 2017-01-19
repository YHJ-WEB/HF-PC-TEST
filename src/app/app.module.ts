import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// import {FooterModule} from "./common-view/footer/footer.module";
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ROOT_ROUTES} from './app.routes';

import { HomeComponent } from './router-view/home/home.component';
import {FooterComponent} from './common-view/footer/footer.component';
import { ServerComponent } from './router-view/home/server.component';
import { NursingComponent } from './router-view/home/nursing.component';
import { HeaderComponent } from './common-view/header/header.component';
import { SwiperComponent } from './common-view/swiper/swiper.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
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
        // FooterModule,
        RouterModule.forRoot(ROOT_ROUTES)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
