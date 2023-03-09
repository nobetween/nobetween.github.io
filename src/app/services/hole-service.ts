import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HoleService
{
    private _testHoles: Hole[] = [
        { id: 0, coursename: 'Graywolf', holenum: 1, center: true, gpscoord: true }
        , { id: 1, coursename: 'Graywolf', holenum: 2, center: true, gpscoord: false }
        , { id: 2, coursename: 'Graywolf', holenum: 3, center: true, gpscoord: true }
    ];

    private _id_index = 1;

    constructor()
    {

    }

    addHole(hole: Hole)
    {
        this._testHoles.push(hole);
    }

    getHoleList() 
    {
        return this._testHoles;
    }

    getNewHoleID()
    {
        this._id_index++;
        return this._id_index;
    }

    removeHole(hole: Hole)
    {
        const index = this._testHoles.indexOf(hole);
        this._testHoles.splice(index, 1);
    }
}

export interface Hole
{
    id: Number;
    coursename: string;
    holenum: Number;
    center: boolean;
    gpscoord: boolean;
    holename?: string;
}