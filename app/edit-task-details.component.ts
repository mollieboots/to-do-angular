import { Component } from 'angular2/core';
import { Task } from './task.model';
import { NewTaskComponent } from './new-task.component';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
    <div class="task-form">
      <h4>Edit Description: </h4>
      <input [(ngModel)]="task.description" class="col-sm-8 input-lg task-form"/>
    </div>
  `
})

export class EditTaskDetailsComponent {
  public task: Task;
}
