import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, name: 'study Angular' },
    { id: 2, name: 'read novel Pham nhan tu tien chi tien gioi' },
  ];
  selectedTodo: Todo;

  constructor() { }

  ngOnInit() {
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }
}
