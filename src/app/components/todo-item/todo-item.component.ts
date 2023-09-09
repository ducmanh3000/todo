import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {faX} from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  faPenToSquare = faPenToSquare;
  faX = faX;
  isEditing: any;
  isHovered: any;

  constructor() {}

  ngOnInit() {}

  @Input() todo!: Todo; 
  @Output() changeStatus: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  changeTodoStatus() {
    this.changeStatus.emit({ ...this.todo, isCompleted: !this.todo.isCompleted });
  }

  removeTodo() {
    this.deleteTodo.emit(this.todo);
  }

  submitEdit(event: KeyboardEvent) {
    const {keyCode} = event;
    event.preventDefault();  //Prevent Form to submit by default 
    if (keyCode === 13) {
      this.editTodo.emit(this.todo);
      this.isEditing = false;
    }
  }
}
