import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDisplayComponent } from './employee/employee-display/employee-display.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { Error404PageComponent } from './error-pages/error404-page/error404-page.component';

const routes: Routes = [
  {path:'employee', children:[
    {path:'display', component:EmployeeDisplayComponent},
    {path:'create', component:EmployeeCreateComponent},
    {path:'update/:id', component:EmployeeUpdateComponent}
  ]},
  /* Added a redirect route to employee/display so that whenever localhost:4200 is visited it wil redirect to localhost:4200/employee/display */
  {path: '', redirectTo:'/employee/display', pathMatch:'full'},

  /* Wildcard routing */
  {path: '**', component:Error404PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
