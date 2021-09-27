import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { MloginComponent } from './mlogin.component';

describe('MloginComponent', () => {
  let component: MloginComponent;
  let fixture: ComponentFixture<MloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
         HttpClientTestingModule,
         HttpTestingController
       ],
      declarations: [ MloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
