import { Component , OnInit , AfterViewInit} from '@angular/core';
import { Router , NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,AfterViewInit{

  constructor(private router: Router){}
  private url: string;

  ngOnInit():void {
    this.router.events.subscribe((event) => {
      if ((event instanceof NavigationEnd)) {
        document.body.scrollTop = 0;
        this.url = this.router.url;
      }
    })
  }

  ngAfterViewInit():void {
    function resizeHtmlFont() {
      let t = $("html").width();
      t < 1024 ? $("body,html").attr("style", "font-size:64px;") : t > 1200 ? $("body,html").attr("style", "font-size:75px;") : $("body,html").attr("style", "font-size:" + t / 16 + "px;")
    }
    resizeHtmlFont();
    $(document).ready(function () {
      resizeHtmlFont();
    })
  }
}
