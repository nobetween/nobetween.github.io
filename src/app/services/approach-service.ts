import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ApproachService
{
    private _testAppraochShots: ApproachShot[] = [
        { id: 0, coursename: 'Graywolf', holeNum: 1, par: 5, approachshot: true }
        , { id: 1, coursename: 'Graywolf', holeNum: 2, par: 4, approachshot: true }
        , { id: 2, coursename: 'Graywolf', holeNum: 3, par: 3, approachshot: true }
        , { id: 3, coursename: 'Graywolf', holeNum: 4, par: 4, approachshot: true }
        , { id: 4, coursename: 'Graywolf', holeNum: 5, par: 5, approachshot: true }
        , { id: 5, coursename: 'Graywolf', holeNum: 6, par: 4, approachshot: true }
        , { id: 6, coursename: 'Graywolf', holeNum: 7, par: 3, approachshot: true }
        , { id: 7, coursename: 'Graywolf', holeNum: 8, par: 4, approachshot: true }
        , { id: 8, coursename: 'Graywolf', holeNum: 9, par: 4, approachshot: true }
        , { id: 9, coursename: 'Graywolf', holeNum: 10, par: 4, approachshot: true }
        , { id: 10, coursename: 'Graywolf', holeNum: 11, par: 3, approachshot: true }
        , { id: 11, coursename: 'Graywolf', holeNum: 12, par: 4, approachshot: true }
        , { id: 12, coursename: 'Graywolf', holeNum: 13, par: 5, approachshot: true }
        , { id: 13, coursename: 'Graywolf', holeNum: 14, par: 4, approachshot: true }
        , { id: 14, coursename: 'Graywolf', holeNum: 15, par: 4, approachshot: true }
        , { id: 15, coursename: 'Graywolf', holeNum: 16, par: 4, approachshot: true }
        , { id: 16, coursename: 'Graywolf', holeNum: 17, par: 3, approachshot: true }
        , { id: 17, coursename: 'Graywolf', holeNum: 18, par: 5, approachshot: true }
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
    holeNum: number;
    par: number;
    approachshot: boolean;
}