import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true, // ✅ Make it standalone
  template: `
    <div class="task-card">
      <h3>{{task.title}}</h3>
      <p>{{task.description}}p>
    </div>
  `,
  styles: [`
    .task-card {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
      margin: 10px 0;
    }
  `]
})
export class TaskComponent {
  @Input() task! :{title: string; description: string};
}
