import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly uri:string = "";
  constructor(private http:HttpClient) {
    this.uri = "http://localhost:8080/employee";
  }

  getAllEmployeeDetails(){
    return this.http.get(this.uri);
  }
}
