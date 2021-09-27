import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RoomService } from '../shared/room.service';
import { Room } from '../shared/room.model';

@Component({
  selector: 'app-rooom',
  templateUrl: './rooom.component.html',
  styleUrls: ['./rooom.component.css'],
  providers:[RoomService]
})
export class RooomComponent implements OnInit {

  constructor(public roomService:RoomService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshStaff();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.roomService.selectedRoom = {
      _id:"",
      roomNo:"",
      roomType:"",
      occupancy:"",
      price:"",
      description: "" ,
      status:""
    }
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.roomService.postRoom(form.value).subscribe((res) =>{
      console.log(res);
      this.resetForm(form);
      alert("Room Addded Successfull");
     // M.toast({html:'Booked Successfully', classes:'rounded'});
    })
  }
  else {
    this.roomService.putRoom(form.value).subscribe((res) =>{
      console.log(res);
      this.resetForm(form);
      alert("booking Successfull");
    //  M.toast({html:'Booked Successfully', classes:'rounded'});
    })
    

  }
  }

  refreshStaff(){
    this.roomService.getRoom3().subscribe((res)=>{
      this.roomService.rooms = res as Room[];
    })
  }

  onEdit(rom : Room){
    this.roomService.selectedRoom = rom;
  }


  onDelete(_id:string, form: NgForm){
    if(confirm('Are You Sure to Delete this Record!!')==true){
      this.roomService.deleteroom(_id).subscribe((res)=>{
        this.refreshStaff();
        this.resetForm(form);
        
      })
    }
  }









}
