import { Component, OnInit } from '@angular/core';
import { Todo } from '../_interface/todo';
import { Eventping } from '../_interface/eventping';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent implements OnInit {

  public toDoShow: boolean;
  public toDoDoneShow: boolean;
  public $todos: Todo[];
  public $todosdone: Todo[];
 
  constructor() {
    this.toDoShow = true;
    this.toDoDoneShow = true;
    this.$todos = [{
      id: 0,
      label: 'test',
      status: false,
      position: 1
    }];
    this.$todosdone = [];
  }

  ngOnInit(): void {
  }

  public update(event: Eventping): void {
    if ('check' === event.label) {
      console.log(event.label);
      if (!event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object),1);
        this.$todosdone.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object),1);
        this.$todosdone.push(event.object);
      }
    }
  }

  public create(event: Todo): void {
    event.position = this.$todos.length + 1;
    this.$todos.push(event);
  }

}
