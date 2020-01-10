import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [
    { id: 1, name: 'study Angular' },
    { id: 2, name: 'read novel Pham nhan tu tien chi tien gioi' },
  ];

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }
}
