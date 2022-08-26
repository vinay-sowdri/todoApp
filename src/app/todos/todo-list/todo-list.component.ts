import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
 @Input() list! : Todo[] ;
 @Output() deleteTodo : EventEmitter<Number> = new EventEmitter<Number>();
  cols = [
    {name : "Task Name"},
    {name : "Description"},
    {name : "Last Modified"},
    {name : "Action"}
  ];
  
  constructor() { 
    
    console.log(this.list);
  }

  ngOnInit(): void {
  }

  deleteTask(id:number){
    console.log(id);
    this.deleteTodo.emit(id);
  }

}
