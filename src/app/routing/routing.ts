import { EmployeeComponent } from './../components/employee/employee.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { AdminComponent } from './../components/admin/admin.component';
import { ClockinComponent } from './../components/clockin/clockin.component';
import { RouterModule, Routes } from '@angular/router';


 export const appRoutes: Routes = [
    { path: 'clockin', component: ClockinComponent },
    { path: 'admin',      component: AdminComponent },
    {
      path: 'employee',
      component: EmployeeComponent,
      data: { title: 'Heroes List' }
    },
    { path: '',
      redirectTo: '/clockin',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];