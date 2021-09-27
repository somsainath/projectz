import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


import { RoomService } from '../shared/room.service'
import {Room} from '../shared/room.model'

interface Room1 {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  providers:[RoomService]
})
export class RoomComponent implements OnInit {

  roomType:String='';
  constructor(public roomService: RoomService,private router: Router) { }

  ngOnInit(): void {
   this.getAll()
  }

  displayedColumns: string[] = ['roomNo', 'roomType', 'price'];
  

  rooms: Room1[] = [
    {value: 'Single Bed', viewValue: 'Single Bed'},
    {value: 'Double Bed', viewValue: 'Double Bed'},
    {value: 'Delux', viewValue: 'Delux'}
  ];

 onSubmit(form : NgForm){
   this.roomService.getRoom1(this.roomType);
  }

  refershRoomList(){
    this.roomService.getRoom1(this.roomType).subscribe((res) => {
      this.roomService.rooms = res as Room[];
    });
  }
  
  getAll(){
    this.roomService.getRoom3().subscribe((res) => {
      this.roomService.rooms = res as Room[];
    });
  }

}
