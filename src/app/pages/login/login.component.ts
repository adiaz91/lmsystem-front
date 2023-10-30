import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Student } from '../../models/student';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private loginService: LoginService,private router: Router) {}
  ngOnInit(): void {
    sessionStorage.clear();
  }

 email: string = '';
 student: Student  = {
   id: null,
   email: '',
   firstName: '',
   lastName: '',
   address: '',
   dateOfBirth: new Date(),
   phoneNumber: ''
 };

  login(){
   this.loginService.getStudent(this.email).subscribe((s)=>{
      console.log(s);
      sessionStorage.setItem('student', s.email);
      sessionStorage.setItem('rol', "STUDENT");
      this.router.navigate(['/', 'home']);
   });
  }

  admin(){
    
       sessionStorage.setItem('rol', "ADMIN");
       this.router.navigate(['/', 'home']);
   
   }

  register(){
    this.loginService.registerStudent(this.student).subscribe((s)=>{
     
      this.student= {
        id: null,
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        dateOfBirth: new Date(),
        phoneNumber: ''
      };
      Swal.fire({
        title: 'Info!',
        text: 'Student registered successfully!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
   });
  }
}
