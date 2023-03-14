import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApproachService
{
    private _testAppraochShots: ApproachShot[] = [
        { id: 0, coursename: 'Graywolf', holenum: 1, par: 5, approachshot: true }
        , { id: 1, coursename: 'Graywolf', holenum: 2, par: 4, approachshot: true }
        , { id: 2, coursename: 'Graywolf', holenum: 3, par: 3, approachshot: true }
        , { id: 3, coursename: 'Graywolf', holenum: 4, par: 4, approachshot: true }
        , { id: 4, coursename: 'Graywolf', holenum: 5, par: 5, approachshot: true }
        , { id: 5, coursename: 'Graywolf', holenum: 6, par: 4, approachshot: true }
        , { id: 6, coursename: 'Graywolf', holenum: 7, par: 3, approachshot: true }
        , { id: 7, coursename: 'Graywolf', holenum: 8, par: 4, approachshot: true }
        , { id: 8, coursename: 'Graywolf', holenum: 9, par: 4, approachshot: true }
        , { id: 9, coursename: 'Graywolf', holenum: 10, par: 4, approachshot: true }
        , { id: 10, coursename: 'Graywolf', holenum: 11, par: 3, approachshot: true }
        , { id: 11, coursename: 'Graywolf', holenum: 12, par: 4, approachshot: true }
        , { id: 12, coursename: 'Graywolf', holenum: 13, par: 5, approachshot: true }
        , { id: 13, coursename: 'Graywolf', holenum: 14, par: 4, approachshot: true }
        , { id: 14, coursename: 'Graywolf', holenum: 15, par: 4, approachshot: true }
        , { id: 15, coursename: 'Graywolf', holenum: 16, par: 4, approachshot: true }
        , { id: 16, coursename: 'Graywolf', holenum: 17, par: 3, approachshot: true }
        , { id: 17, coursename: 'Graywolf', holenum: 18, par: 5, approachshot: true }
    ];

    constructor()
    {

    }

    getApproachShots()
    {
        return this._testAppraochShots;
    }
}

export interface ApproachShot
{
    id: number;
    coursename: string;
    holenum: number;
    par: number;
    approachshot: boolean;
}