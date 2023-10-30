import { CourseRegistration } from "./course";

export interface TaskCategory {
    id: number;
    description: string;
}

export interface Task {
    id: string;
    description: string;
    taskDate?: Date;
    category?: TaskCategory;
    timeSpent: number;
    courseRegistration?: CourseRegistration;
}


  