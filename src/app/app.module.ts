import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentComponent } from './pages/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CoursesComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [[{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
