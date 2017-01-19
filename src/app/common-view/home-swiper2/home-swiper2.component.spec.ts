/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeSwiper2Component } from './home-swiper2.component';

describe('HomeSwiper2Component', () => {
  let component: HomeSwiper2Component;
  let fixture: ComponentFixture<HomeSwiper2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSwiper2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSwiper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
