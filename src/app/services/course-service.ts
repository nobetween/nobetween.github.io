import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CourseService
{
    private _testCourses: Course[] = [
        { id: 0, coursename: 'Graywolf', numholes: 18 }
        , { id: 1, coursename: 'Needwood ', numholes: 18 }
        , { id: 2, coursename: 'Poolsville ', numholes: 18 }
    ];

    private _id_index = 1;

    constructor()
    {

    }

    addCourse(course: Course)
    {
        this._testCourses.push(course);
    }

    getCourseList() 
    {
        return this._testCourses;
    }

    getNewCourseID()
    {
        this._id_index++;
        return this._id_index;
    }

    updateCourse(course: Course)
    {
        this._testCourses.forEach(tempCourse =>
        {
            if (tempCourse.id === course.id)
            {
                tempCourse = course;
            }
        });
    }

    removeCourse(course: Course)
    {
        const index = this._testCourses.indexOf(course);
        this._testCourses.splice(index, 1);
    }
}

export interface Course
{
    id: Number;
    coursename: string;
    numholes: Number;
}