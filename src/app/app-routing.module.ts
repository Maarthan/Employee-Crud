import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDisplayComponent } from './employee/employee-display/employee-display.component';

const routes: Routes = [
  {path:'employee', children:[
    {path:'display', component:EmployeeDisplayComponent},
    {path:'create', component:EmployeeCreateComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
