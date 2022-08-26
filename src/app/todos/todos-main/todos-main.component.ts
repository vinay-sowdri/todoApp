import { Component, OnInit } from '@angular/core';
import { NgxToastService } from 'ngx-toast-notifier';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-main',
  templateUrl: './todos-main.component.html',
  styleUrls: ['./todos-main.component.css']
})
export class TodosMainComponent implements OnInit {
  todoTobeEditd : Todo | null = null;
  todoList : Todo[] = [];
  constructor(private service: TodoService, private toastr : NgxToastService) { 
   this.todoList = [{Name:"test",Description:"sdfs sdf stsaadf sfsdf s ", Id:1, LastModifiedAt :"sdf" , Status:true}];
    console.log(this.todoList);
  }

  ngOnInit(): void {
    
    this.subcribeToData();
  }

  deleteTodo(id:any){
    this.service.deleteTask(id).subscribe({
      next : () => {
          this.subcribeToData();
          this.toastr.onSuccess("Success","The task was deleted successfully");
      },
      error : () =>{
        this.toastr.onDanger("Error","Something went wrong");
      }
    }
    );

  }

  subcribeToData(){
    this.service.getAllTask();
    this.service.data.subscribe(x=>{
      this.todoList = x;
    });
  }



}
