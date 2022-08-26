import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosMainComponent } from './todos-main/todos-main.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from './todo.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodosMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers :[TodoService]
})
export class TodosModule { }
