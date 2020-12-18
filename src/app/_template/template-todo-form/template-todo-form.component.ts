import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../_interface/todo';
import { Eventping } from '../../_interface/eventping';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent implements OnInit {

  public todo$: Todo;
  @Output() ping: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { 
    this.todo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
  }

  ngOnInit(): void {
  }

  public createTodo($event: any): void {
    this.ping.emit(this.todo$);
    this.todo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
  }

}