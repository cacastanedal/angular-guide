import { Component, EventEmitter, Output, inject,Input } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { NewTask } from "./new-task.model";
import { TasksService } from "../tasks.service";

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    @Input({required: true}) userId!: string;
    @Output() closeComponent = new EventEmitter<void>();

    enteredTitle: string = '';
    enteredSummary: string = '';
    enteredDate: string = '';

    private tasksService = inject(TasksService);
  
    onClosingComponent() {
        this.closeComponent.emit();
    }

    onFormSubmit(){
        this.tasksService.addTask({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate,
        }, this.userId)

        this.closeComponent.emit();
    }
}