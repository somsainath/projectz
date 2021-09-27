import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth.guard';
import { BookingService } from './shared/booking.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { StaffComponent } from './staff/staff.component';
import { RooomComponent } from './rooom/rooom.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { ManagerComponent } from './manager/manager.component';
import { MsignupComponent } from './msignup/msignup.component';
import { OwnerComponent } from './owner/owner.component';
import { Booking1Component } from './booking1/booking1.component';
import { OloginComponent } from './ologin/ologin.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RoomComponent,
    HomeComponent,
    StaffComponent,
    RooomComponent,
    MloginComponent,
    ManagerComponent,
    MsignupComponent,
    OwnerComponent,
    Booking1Component,
    OloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [UserService, AuthGuard,BookingService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
