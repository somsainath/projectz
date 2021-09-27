import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MsignupComponent } from './msignup.component';

describe('MsignupComponent', () => {
  let component: MsignupComponent;
  let fixture: ComponentFixture<MsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
         HttpClientTestingModule,
         HttpTestingController
       ],
      declarations: [ MsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
