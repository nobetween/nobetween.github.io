import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { Subject, Observable, takeUntil, map } from "rxjs";

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

    constructor(private http: HttpClient)
    {
        /*         const path = 'https://nobetween.com/api/Login/Login';
                const formData: any = new FormData();
                formData.append('email', 'lehmandan500@gmail.com');
                formData.append('pw', '1111');
                this.http.post(path, formData, { responseType: 'blob', params: formData })
                    .subscribe(response =>
                    {
                        if (response)
                        {
                            console.log('response', response)
                        }
                    },
                        error => console.log('ERROR = ', error)
                    ); */

        //fetch('https://nobetween.com/api/Login/Login?email={lehmandan500@gmail.com}&pw={1111}');
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