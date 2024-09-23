import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from "./new-task/new-task.model";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {

    @Input({required: true}) userName!: string;
    @Input({required: true}) userId!: string;

    isAddingTask: boolean = false;

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

    onCompleteTask(id: string){
      this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    onClickAddTask(){
      this.isAddingTask = true;
      console.log("Hello clicking add task");
    }

    onClosingNewTask(){
      this.isAddingTask = false;
    }

    onAddTask(taskData: NewTask){
      this.tasks.push({
        id: new Date().getTime().toString(),
        userId: this.userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      });

      this.isAddingTask = false;
    }
}