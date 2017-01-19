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


import {FooterComponent} from './common-view/footer/footer.component';
import { ServerComponent } from './router-view/home/server.component';
import { NursingComponent } from './router-view/home/nursing.component';
import { HeaderComponent } from './common-view/header/header.component';
import { SwiperComponent } from './common-view/swiper/swiper.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleListComponent,
        ArticleDetailComponent,
        HomeComponent,
        ArticleItemComponent,
        ArticleComponent,
        ToolComponent,
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
