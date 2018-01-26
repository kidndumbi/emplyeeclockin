import { ViewEmployeesComponent } from './../components/admin/view-employees/view-employees.component';
import { NewEmployeeComponent } from './../components/admin/new-employee/new-employee.component';
import { EmployeeComponent } from './../components/employee/employee.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { AdminComponent } from './../components/admin/admin.component';
import { ClockinComponent } from './../components/clockin/clockin.component';
import { RouterModule, Routes } from '@angular/router';



export const appRoutes: Routes = [
  { path: 'clockin', component: ClockinComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      //{ path: '', redirectTo: 'tracks' },
      { path: 'newemployee', component: NewEmployeeComponent },
      { path: 'viewemployees', component: ViewEmployeesComponent },
    ]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/clockin',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];