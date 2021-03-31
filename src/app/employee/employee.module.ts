import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [EmployeeDisplayComponent, EmployeeCreateComponent],
  imports: [
    CommonModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
