import { Student } from "./student";

export interface Course {
    id: string;
    name: string;
    description: string;
    startDate: string;
}

export interface CourseRegistration {
    id: string;
    student: Student;
    course: Course;
  }

  export interface CourseRegistrationDto{
    courseId: string;
    email: string;
  }
  