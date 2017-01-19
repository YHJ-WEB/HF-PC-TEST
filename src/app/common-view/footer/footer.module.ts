/**
 * Created by lixu on 17/1/17.
 */
import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FooterComponent } from './footer.component';

@NgModule({
    imports : [BrowserModule],
    exports : [FooterComponent],
    declarations: [FooterComponent],
    providers: [],
})
export class FooterModule { }
