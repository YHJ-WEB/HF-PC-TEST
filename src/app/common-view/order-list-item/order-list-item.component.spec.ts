/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {OrderListItemComponent} from './order-list-item.component';

describe('OrderListItemComponent', () => {
    let component: OrderListItemComponent;
    let fixture: ComponentFixture<OrderListItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderListItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
