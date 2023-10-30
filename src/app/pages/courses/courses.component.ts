import { Component,  OnInit } from '@angular/core';
import { Course, CourseRegistrationDto } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  rol: string | null = null;
  email: string | null = null;

  constructor(private coursesService: CoursesService) {}
  courseList: Course[] = [];
  course: Course = {
    id: '',
    name: '',
    description: '',
    startDate: '',
  };

  ngOnInit(): void {
    this.rol = sessionStorage.getItem('rol');
    this.email = sessionStorage.getItem('student');
    this.coursesService.getAll().subscribe((l) => (this.courseList = l));
  }

  register(courseId:string) {
    let  courseRegistrationDto : CourseRegistrationDto = {
      courseId: courseId,
      email: this.email?this.email:''
    };
    this.coursesService.addStudent(courseRegistrationDto).subscribe((r)=>{
      Swal.fire({
        title: 'Info!',
        text: 'Student registered successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    });
  }

  create() {
    this.coursesService.create(this.course).subscribe((r) => {
      this.coursesService.getAll().subscribe((l) => (this.courseList = l));
      Swal.fire({
        title: 'Info!',
        text: 'Course created successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    });
  }
}
