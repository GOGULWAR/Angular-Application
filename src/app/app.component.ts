import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  constructor(private fb:FormBuilder,private employeeService:EmployeeService) { }

  ngOnInit() {
  }

  employee=this.fb.group({
    employeeId:[''],
    employeeName:['']
  })

  insertEmployee(){
    console.log(this.employee.value);
    this.employeeService.addEmployee(this.employee.value).subscribe(success=>{
      console.log(success);
      alert("Submitted successfully");
    },error=>{
      console.log(error); 
    });
  }
}
