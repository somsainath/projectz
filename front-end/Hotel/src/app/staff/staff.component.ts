import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StaffService } from '../shared/staff.service';
import { Staff } from '../shared/staff.model';

declare var M:any

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  providers:[StaffService]
})
export class StaffComponent implements OnInit {

  constructor(public staffService: StaffService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshStaff();
  }


  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.staffService.selectedStaff = {
      _id:"",
      empName:"",
      empAddress:"",
      nic:"",
      salary:0,
      age: 0 ,
      occupation:"",
      email:""
    }
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.staffService.postStaff(form.value).subscribe((res) =>{
      console.log(res);
      this.resetForm(form);
      alert("booking Successfull");
      M.toast({html:'Booked Successfully', classes:'rounded'});
    })
  }
  else {
    this.staffService.putStaff(form.value).subscribe((res) =>{
      console.log(res);
      this.resetForm(form);
      alert("booking Successfull");
      M.toast({html:'Booked Successfully', classes:'rounded'});
    })
    

  }
  }

  refreshStaff(){
    this.staffService.getStaff().subscribe((res)=>{
      this.staffService.staffs = res as Staff[];
    })
  }

  onEdit(stf : Staff){
    this.staffService.selectedStaff = stf;
  }


  onDelete(_id:string, form: NgForm){
    if(confirm('Are You Sure to Delete this Record!!')==true){
      this.staffService.deleteStaff(_id).subscribe((res)=>{
        this.refreshStaff();
        this.resetForm(form);
        
      })
    }
  }
}
