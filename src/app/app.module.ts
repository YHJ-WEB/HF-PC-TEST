import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {ArticleListComponent} from './router-view/article/article-list/article-list.component';
import {ArticleDetailComponent} from './router-view/article/article-detail/article-detail.component';
import {HomeComponent} from './router-view/home/home.component';
import {ROOT_ROUTES} from './app.routes';
import { ArticleItemComponent } from './common-view/article-item/article-item.component';
import { ArticleComponent } from './router-view/article/article.component';
import { ToolComponent } from './router-view/tool/tool.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleListComponent,
        ArticleDetailComponent,
        HomeComponent,
        ArticleItemComponent,
        ArticleComponent,
        ToolComponent
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
