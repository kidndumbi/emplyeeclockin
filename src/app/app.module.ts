import { EmployeesService } from './services/employees.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutes } from './routing/routing';
import { RouterModule } from '@angular/router';
import { UserIdleModule } from 'angular-user-idle';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { ClockinComponent } from './components/clockin/clockin.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewEmployeesComponent } from './components/admin/view-employees/view-employees.component';
import { NewEmployeeComponent } from './components/admin/new-employee/new-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    ClockinComponent,
    AdminComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    ViewEmployeesComponent,
    NewEmployeeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    BrowserModule,
    UserIdleModule.forRoot({idle: 50, timeout: 50, ping: 1})
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
