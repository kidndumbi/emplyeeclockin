import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private userIdle: UserIdleService) { }

  ngOnInit() {

      //Start watching for user inactivity.
    this.userIdle.startWatching();
    
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));
    
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));

  }

}
