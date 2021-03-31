import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.scss']
})
export class EmployeeDisplayComponent implements OnInit {

  employeeDetails:Array<any>;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployeeDetails().subscribe(
      (data:any) => {
        this.employeeDetails = data
        console.log(this.employeeDetails);
      },
      error => console.log(error)
    )
  }

}
