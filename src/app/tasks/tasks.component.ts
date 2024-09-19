import { Component, Input } from "@angular/core";
import { TaskComponent } from "../task/task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {

    @Input({required: true}) userName!: string;
    @Input({required: true}) userId!: string;

    tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary: 'You are doing great, you are finding time in your day to learn a new skill and that in itself its very good, its showing you are thinking differently and acting better.',
            dueDate: '2024-10-23'
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ]

    get selectedUserTasks(){
      return this.tasks.filter((task) => task.userId === this.userId)
    }
}