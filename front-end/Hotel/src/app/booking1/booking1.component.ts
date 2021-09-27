import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookingService } from '../shared/booking.service'; 
import { Booking } from '../shared/booking.model'; 


@Component({
  selector: 'app-booking1',
  templateUrl: './booking1.component.html',
  styleUrls: ['./booking1.component.css'],
  providers:[BookingService]
})
export class Booking1Component implements OnInit {

  constructor(public bookingService:BookingService) { }

  ngOnInit(): void {
    this.refreshStaff();
  }



    refreshStaff(){
      this.bookingService.getBooking().subscribe((res)=>{
        this.bookingService.bookings = res as Booking[];
      })
    }

}
