import { Injectable } from "@angular/core";
import { NewTask } from "./new-task/new-task.model"

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = [
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

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTask(taskData: NewTask, userId: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
          });
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
}