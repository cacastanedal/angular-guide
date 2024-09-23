import { Component, EventEmitter, Input, Output } from "@angular/core";
import { type Task } from "./task.model";


@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css'
})
export class TaskComponent {

    @Input({required: true}) taskInfo!: Task;
    @Output() complete = new EventEmitter<string>();

    onCompleteTask(){
        this.complete.emit(this.taskInfo.id);
    }
}