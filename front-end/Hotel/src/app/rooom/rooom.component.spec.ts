import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';


import { RooomComponent } from './rooom.component';

describe('RooomComponent', () => {
  let component: RooomComponent;
  let fixture: ComponentFixture<RooomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
         HttpClientTestingModule,
         HttpTestingController
       ],
      declarations: [ RooomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RooomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
