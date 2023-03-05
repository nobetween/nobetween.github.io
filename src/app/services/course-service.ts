import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

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
        console.log('course', course);
        const index = this._testCourses.indexOf(course);
        console.log('index', index);
        this._testCourses.splice(index, 1);
        console.log('_testCourses', this._testCourses);
    }
}

export interface Course
{
    id: Number;
    coursename: string;
    numholes: Number;
}