import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeService } from './employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [EmployeeDisplayComponent, EmployeeCreateComponent, EmployeeUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
