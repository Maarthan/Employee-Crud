import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  
  employeeDetailsForm;

  constructor(private fb:FormBuilder, private employeeService:EmployeeService) { 
    this.employeeDetailsForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.email, Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.employeeDetailsForm.value);
    this.employeeService.createEmployeeDetails(this.employeeDetailsForm.value).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.employeeDetailsForm.reset();
  }

}
