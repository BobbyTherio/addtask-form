import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //Task is the Interface
  @Input() task!: ITask;

  constructor() { }

  ngOnInit(): void {
  }

}
