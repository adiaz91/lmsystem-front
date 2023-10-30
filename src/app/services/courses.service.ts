import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course, CourseRegistration, CourseRegistrationDto } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private coursesUrl: string = 'http://localhost:8080/api/courses';
  private coursesRegUrl: string = 'http://localhost:8080/api/registration';
  

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http : HttpClient) { }

  getAll(){
      return this.http.get<Course[]>(this.coursesUrl);
  }

  create(course: Course){
    return this.http.post<Course>(this.coursesUrl,course,{headers:this.httpHeaders});
  }

  update(course: Course){
    return this.http.put<Course>(this.coursesUrl,course,{headers:this.httpHeaders});
  }

  addStudent(course: CourseRegistrationDto){
    return this.http.post<CourseRegistration>(this.coursesRegUrl,course,{headers:this.httpHeaders});
  }

  getAllByStudent(email:string){
    return this.http.get<CourseRegistration[]>(`${this.coursesRegUrl}/${email}`);
 }

 

}
