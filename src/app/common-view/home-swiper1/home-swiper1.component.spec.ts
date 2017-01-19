/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeSwiper1Component } from './home-swiper1.component';

describe('HomeSwiper1Component', () => {
  let component: HomeSwiper1Component;
  let fixture: ComponentFixture<HomeSwiper1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSwiper1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSwiper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
