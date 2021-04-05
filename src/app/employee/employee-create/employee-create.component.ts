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
  message:String = "";
  type:String = "";

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
    const newEmployee = {
      "name":this.employeeDetailsForm.get('name').value,
      "email":this.employeeDetailsForm.get('email').value
    }
    this.employeeService.createEmployeeDetails(newEmployee).subscribe(
      data => {
        console.log(data);
        this.message = "Employee details created successfully";
        this.type = "success";
        this.deleteMessage();
      },
      error => {
        console.log(error);
        this.message = error.error.message;
        this.type = "danger";
        this.deleteMessage();
      }
    );
    this.employeeDetailsForm.reset();
  }

  deleteMessage(){
    setTimeout(()=>{
      this.message = "";
    },3000)
  }

}
