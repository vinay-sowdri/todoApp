import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../model/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TodoService {

  public data = new BehaviorSubject<Todo[]>([]);
  public readonly baseUrl = environment.Apiurl;
  constructor(private http:HttpClient) {

   }

   //method to get all task
   getAllTask(){
      this.http.get<Todo[]>(this.baseUrl+"Todo").subscribe(x=>{
       this.data.next(x);
     });
   }

   addTask(task : Todo) : Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl+"Todo", task,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })}
    );
   }

   deleteTask(id : number):Observable<boolean>{
     return this.http.delete<boolean>(this.baseUrl+'Todo/'+id, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
   }

   


}
