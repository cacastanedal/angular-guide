import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from "./new-task/new-task.model";
import { TasksService } from "./tasks.service";

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

    private tasksService: TasksService;

    constructor(tasksService: TasksService){
      this.tasksService = tasksService;
    }

    get selectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id: string){
      this.tasksService.removeTask(id);
    }

    onClickAddTask(){
      this.isAddingTask = true;
      console.log("Hello clicking add task");
    }

    onClosingNewTask(){
      this.isAddingTask = false;
    }

    onAddTask(taskData: NewTask){
      this.tasksService.addTask(taskData, this.userId);
      this.isAddingTask = false;
    }
}