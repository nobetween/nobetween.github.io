import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TeeService
{
    private _testTees: Tee[] = [
        { id: 0, teebox_id: 1, color: 'Green', enabled: true, coursename: 'Graywolf' }
        , { id: 1, teebox_id: 2, color: 'White', enabled: true, coursename: 'Graywolf' }
        , { id: 2, teebox_id: 3, color: 'Blue', enabled: true, coursename: 'Graywolf' }
    ];

    private _id_index = 1;

    constructor()
    {

    }

    addTee(tee: Tee)
    {
        this._testTees.push(tee);
    }

    getTees() 
    {
        return this._testTees;
    }

    getNewTeeID()
    {
        this._id_index++;
        return this._id_index;
    }

    updateTee(tee: Tee)
    {
        this._testTees.forEach(tempTee =>
        {
            if (tempTee.id === tee.id)
            {
                tempTee = tee;
            }
        });
    }

    removeCourse(tee: Tee)
    {
        const index = this._testTees.indexOf(tee);
        this._testTees.splice(index, 1);
    }
}

export interface Tee
{
    id: Number;
    teebox_id: Number;
    color: string;
    enabled: boolean;
    coursename: string;
}