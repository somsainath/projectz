import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRoomComponent } from './search-room/search-room.component';
import { BookingComponent } from './booking/booking.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { StaffComponent } from './staff/staff.component';
import { RooomComponent } from './rooom/rooom.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { ManagerComponent } from './manager/manager.component';
import { MsignupComponent } from './msignup/msignup.component';
import { OwnerComponent } from './owner/owner.component';
import { Booking1Component } from './booking1/booking1.component';
import { OloginComponent } from './ologin/ologin.component';


const routes: Routes = [
  {path:'search', component: SearchRoomComponent,canActivate:[AuthGuard]},
  {path:'booking/:roomNo', component: BookingComponent,canActivate:[AuthGuard]},
  {path:'signup', component: SignupComponent,canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'room', component:RoomComponent},
  {path:'home', component:HomeComponent},
  {path:'staff',component:StaffComponent,canActivate:[AuthGuard]},
  {path:'rooom',component:RooomComponent,canActivate:[AuthGuard]},
  {path:'mlogin',component:MloginComponent},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard]},
  {path:'msignup',component:MsignupComponent,canActivate:[AuthGuard]},
  {path:'owner',component:OwnerComponent,canActivate:[AuthGuard]},
  {path:'booking1',component:Booking1Component},
  {path:'ologin',component:OloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SearchRoomComponent,BookingComponent,SignupComponent,LoginComponent,RoomComponent]
