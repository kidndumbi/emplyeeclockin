import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  allEmployees: Employee[];

  constructor(private empService: EmployeesService) {
         
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.empService.getAllEmployees().then((emps)=> {
     this.allEmployees = emps;
    });
 }

  ngOnInit() {
  }

}
