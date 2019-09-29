import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'


const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
  };
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  inserturl:string="http://localhost:8080/addEmployee";

  addEmployee(task:any): Observable<any>{
    console.log(task);
      return this.http.post(this.inserturl,task,httpOptions);
  }
}
