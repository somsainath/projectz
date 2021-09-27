import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';


import { OloginComponent } from './ologin.component';

describe('OloginComponent', () => {
  let component: OloginComponent;
  let fixture: ComponentFixture<OloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
         HttpClientTestingModule,
         HttpTestingController
       ],
      declarations: [ OloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
