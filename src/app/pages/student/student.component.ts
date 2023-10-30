import { Component } from '@angular/core';
import { CourseRegistration } from 'src/app/models/course';
import { Task, TaskCategory } from 'src/app/models/task';
import { CoursesService } from 'src/app/services/courses.service';
import { LogsService } from 'src/app/services/logs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
 
  email: string | null = null;
  taskList: Task[]=[];
  task: Task = {
    id: '',
    description: '',
    timeSpent: 0
  }
  constructor(private coursesService: CoursesService,private logsService:LogsService) {}
  courseList: CourseRegistration[] = [];
  categoryList: TaskCategory[]=[];

  ngOnInit(): void {
   
    this.email = sessionStorage.getItem('student');
    if(this.email){
     this.coursesService.getAllByStudent(this.email).subscribe((l) => (this.courseList = l));
    }
    this.logsService.getCategories().subscribe((r)=>{
      this.categoryList=r;
    });
  }

  getLogs(){
    if(this.task.courseRegistration?.id){
    this.logsService.getAllByRegistration(this.task.courseRegistration.id).subscribe((r)=>{
      this.taskList=r;
    });
    }
  }

  create() {
    this.logsService.create(this.task).subscribe((r) => {
    
      this.getLogs();
      Swal.fire({
        title: 'Info!',
        text: 'Log created successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    });
  }
}
