import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private studentsUrl: string = 'http://localhost:8080/api/students';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http : HttpClient) { }

  getStudent(email: string){
      return this.http.get<Student>(`${this.studentsUrl}/${email}`);
  }


  registerStudent(student: Student){
    return this.http.post<Student>(this.studentsUrl,student,{headers:this.httpHeaders});
  }

}
