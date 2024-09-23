import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { NewTask } from "./new-task.model";

@Component({
    selector: 'app-new-task',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    @Output() closeComponent = new EventEmitter<void>();
    @Output() addTask = new EventEmitter<NewTask>();

    enteredTitle: string = '';
    enteredSummary: string = '';
    enteredDate: string = '';

    onClosingComponent() {
        this.closeComponent.emit();
    }

    onFormSubmit(){
        this.addTask.emit({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate,
        });
    }
}