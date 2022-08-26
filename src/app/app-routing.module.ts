import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosMainComponent } from './todos/todos-main/todos-main.component';


const routes: Routes = [
  {
    path :"",
    component : TodosMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
