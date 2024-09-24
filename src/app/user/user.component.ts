import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
import { TasksService } from '../tasks/tasks.service';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>(); 

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
