import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component'; // ✅ Import TaskComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent], // ✅ Register TaskComponent here
  template: `
    <h1>Task Manager</h1>
    <app-task *ngFor="let task of tasks" [task]="task"></app-task> <!-- ✅ Loop through tasks -->
  `,
})
export class AppComponent {
  tasks=[
    {title: 'learn angular', description: 'Complete the angular tutorial'},
    {title: 'Build a project', description: 'Create a small angular project'},
    {title: 'Review Concepts', description: 'Revise concepts, services and directives'},

  ]
}
