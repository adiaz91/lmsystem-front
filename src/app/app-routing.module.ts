import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentComponent } from './pages/student/student.component';


const routes: Routes = [
 
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CoursesComponent,
      
      },
      {
        path: 'student',
        component: StudentComponent,
        

      }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
