import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
/* import { resourceLimits } from 'worker_threads'; */

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks!:ITask[];

  constructor(private taskService:TaskService) {
    taskService.getTasks().subscribe((results) => {
      this.tasks = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}

