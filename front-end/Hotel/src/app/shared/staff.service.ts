import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Staff } from './staff.model';
import { NgForm } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  selectedStaff: Staff = new Staff;
  staffs: Staff[] = [];
  readonly baseURL = 'http://localhost:3001/staff';

  constructor(private http : HttpClient) { }
  postStaff(sta : Staff){
    return this.http.post(this.baseURL,sta);
  }


  getStaff(){
    return this.http.get(this.baseURL);
  }

  putStaff(stf: Staff){
    var id=stf._id;
    return this.http.put(this.baseURL + '/'+id,stf);
  }

  deleteStaff(_id:string){
    var id=_id
    return this.http.delete(this.baseURL +  '/'+id);
  }
}