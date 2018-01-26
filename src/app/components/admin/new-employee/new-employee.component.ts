import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  employee: Employee;
  allEmployees: Employee[];

  constructor(private empService: EmployeesService) {
    this.employee = { first: "test", last: "", age: 12, email: "" };
    //this.getAllEmployees()
  }

  addemployee() {
     
    console.log('tryin to add');

    this.empService.addemployee(this.employee).then((res) => {
      console.log(res);
      //this.getAllEmployees()
    });
  }

  // getAllEmployees() {
  //    this.empService.getAllEmployees().then((emps)=> {
  //     this.allEmployees = emps;
  //    });
  // }

  ngOnInit() {
  }

}
