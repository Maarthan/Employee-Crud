import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Employee from 'src/assets/models/Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.scss']
})
export class EmployeeDisplayComponent implements OnInit {

  employeeDetails:Array<Employee>;
  searchValue:String = '';

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployeeDetails().subscribe(
      (data:any) => {
        this.employeeDetails = data
        console.log(this.employeeDetails);
      },
      error => console.log(error)
    )
  }

  deleteEmployee(id:BigInteger){
    console.log(id);
    this.employeeService.deleteEmployeeDetails(id).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  updateEmployee(id:BigInteger){
    this.router.navigate(['/employee/update',id]);
  }


}
