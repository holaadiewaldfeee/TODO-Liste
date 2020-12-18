import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../_interface/todo';
import { Eventping } from '../../_interface/eventping';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent implements OnInit {

  @Input() todo$: Todo;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  public changeCheck(event?: any): void {
    this.todo$.status = !this.todo$.status;
    const eventObject: Eventping = {
      label: 'check',
      object: this.todo$
    }
    this.ping.emit(eventObject);
  }

  public changeLabel(event?: any): void {

  }

  public deleteTodo(event?: any): void {

  }

}
