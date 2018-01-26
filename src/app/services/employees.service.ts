import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';
import { resolve } from 'path';

@Injectable()
export class EmployeesService {
  constructor() {
    if (!localStorage.getItem("employees")) {
      localStorage.setItem('employees', '[]');
    }

  }

  addemployee(emp): Promise<string> {
    let employees = [];
    employees = JSON.parse(localStorage.getItem("employees"));

    employees.push(emp);
    localStorage.setItem('employees', JSON.stringify(employees));

    return new Promise((resolve, response) => {
      resolve('done');
    });
  }

  getAllEmployees(): Promise<Employee[]> {
    let emps: Employee[] = [];

    if (localStorage.getItem("employees")) {
      emps = JSON.parse(localStorage.getItem("employees"));
    }
    return new Promise((resolve, reject) => {
      resolve(emps);
    });

  }

}
