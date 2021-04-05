import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Employee from 'src/assets/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly uri:string = "";
  constructor(private http:HttpClient) {
    this.uri = "http://localhost:8080/employee";
  }

  getAllEmployeeDetails(){
    return this.http.get<Observable<Array<Employee>>>(this.uri);
  }

  getSingleEmployee(id:BigInteger){
    return this.http.get<Array<Employee>>(`${this.uri}/${id}`)
  }

  createEmployeeDetails(payload:Object){
    return this.http.post(this.uri,payload);
  }

  deleteEmployeeDetails(id:BigInteger){
    return this.http.delete(`${this.uri}/${id}`);
  }

  updateEmployeeDetails(payload:Object, id:BigInteger){
    return this.http.put(`${this.uri}/${id}`,payload);
  }


}
