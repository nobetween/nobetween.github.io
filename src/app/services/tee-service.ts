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

    private _testTeeLocations: TeeLocation[] = [
        { id: 0, coursename: 'Graywolf', holeNum: 1, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 1, coursename: 'Graywolf', holeNum: 2, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 2, coursename: 'Graywolf', holeNum: 3, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 3, coursename: 'Graywolf', holeNum: 4, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 4, coursename: 'Graywolf', holeNum: 5, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 5, coursename: 'Graywolf', holeNum: 6, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 6, coursename: 'Graywolf', holeNum: 7, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 7, coursename: 'Graywolf', holeNum: 8, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 8, coursename: 'Graywolf', holeNum: 9, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 9, coursename: 'Graywolf', holeNum: 10, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 10, coursename: 'Graywolf', holeNum: 11, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 11, coursename: 'Graywolf', holeNum: 12, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 12, coursename: 'Graywolf', holeNum: 13, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 13, coursename: 'Graywolf', holeNum: 14, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 14, coursename: 'Graywolf', holeNum: 15, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 15, coursename: 'Graywolf', holeNum: 16, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 16, coursename: 'Graywolf', holeNum: 17, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
        , { id: 17, coursename: 'Graywolf', holeNum: 18, g_a: 1, b: 2, w: 3, g_b: 4, r: 5 }
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

    getTeeLocations() 
    {
        return this._testTeeLocations;
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

export interface TeeLocation
{
    id: Number;
    coursename: string;
    holeNum: number;
    g_a: number;
    b: number;
    w: number;
    g_b: number;
    r: number;
}