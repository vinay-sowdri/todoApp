import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxToastNotifierService, NgxToastService } from 'ngx-toast-notifier';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todo : Todo = new Todo();
  @Input() editTodo : Todo|null = null; 
  constructor(private service : TodoService, private toastr : NgxToastService) { }
  maxlength :number= 50;
  ngOnInit(): void {
    if(this.editTodo != null)
      console.log(this.editTodo.Id);
  }

  onAdd(form:NgForm){
   

    this.service.addTask(form.value).subscribe({
      next : (x) =>{
        if(x){
          form.reset();
          this.service.getAllTask();
          this.toastr.onSuccess("Success","The task was added successfully");
        }
        else{
          this.toastr.onDanger("Error","Something Went wrong");
        }
      },
      error : () =>{
        this.toastr.onDanger("Error","Something Went wrong");
      }

    });
  }

}
