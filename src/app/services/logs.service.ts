import { Injectable } from '@angular/core';
import { Task, TaskCategory } from '../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private logsUrl: string = 'http://localhost:8080/api/task';
  
  
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http : HttpClient) { }

  getCategories(){
      return this.http.get<TaskCategory[]>(`${this.logsUrl}/categories`);
  }

  create(task: Task){
    return this.http.post<Task>(this.logsUrl,task,{headers:this.httpHeaders});
  }

  getAllByRegistration(id:string){
    return this.http.get<Task[]>(`${this.logsUrl}/course/${id}`);
  }


}
