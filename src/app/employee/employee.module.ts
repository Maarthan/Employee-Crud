import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeService } from './employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { SharedModule } from '../shared/shared.module';
import { SortPipe } from './sort.pipe';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [EmployeeDisplayComponent, EmployeeCreateComponent, EmployeeUpdateComponent, SortPipe, SearchPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  providers:[EmployeeService]
})
export class EmployeeModule { }
