import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  linkToTitleById(id: string): void {
    let idLen = $("#"+ id).length;
    if (idLen == 0) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.router.navigate(["/home"]);
          $("html, body").animate({scrollTop: $("#" + id).offset().top}, 500);
        }
      });
    } else {
      $("html, body").animate({scrollTop: $("#" + id).offset().top}, 500);
    }
  }
}
