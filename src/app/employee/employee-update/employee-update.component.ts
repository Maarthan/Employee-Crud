import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeDetailsForm;
  employeeId:BigInteger;
  employeeDetail:any;

  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute, private employeeService:EmployeeService, private router:Router) { 
    this.employeeDetailsForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.email, Validators.required]]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.employeeId = params.id;
    })
    this.fetchSingleEmployeeDetails();
    
  }

  fetchSingleEmployeeDetails(){
    this.employeeService.getSingleEmployee(this.employeeId).subscribe(
      (data:any) => {
        this.employeeDetail = data;
        console.log(data)
        this.populateForm(this.employeeDetail);
      },
      error => console.log(error)
    )
  }

  populateForm(employeeDetail){
    this.employeeDetailsForm.get('name').setValue(employeeDetail.name)
    this.employeeDetailsForm.get('email').setValue(employeeDetail.email)  
    console.log()
  }

  submitForm(){
    this.employeeService.updateEmployeeDetails(this.employeeDetailsForm.value,this.employeeId).subscribe(
      data => console.log(data),
      error => console.log(error)
    )

    /* 
    Added a reset method to reset the form once update button is clicked
    Added router navigate function to navigate back to display page
    */
    this.employeeDetailsForm.reset();
    this.router.navigate(['/employee/display']);
  }



}
