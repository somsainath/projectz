import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
 import {HttpClientModule} from '@angular/common/http';
import { Booking1Component } from './booking1.component';

describe('Booking1Component', () => {
  let component: Booking1Component;
  let fixture: ComponentFixture<Booking1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
         HttpClientTestingModule,
         HttpTestingController
       ],
      declarations: [ Booking1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Booking1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
