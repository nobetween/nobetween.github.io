import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ScoresheetService
{
    private _testScoresheet: Scoresheet[] = [
        { id: 0, coursename: 'Graywolf', info: 'Gold' }
        , { id: 0, coursename: 'Graywolf', info: 'Blue' }
        , { id: 0, coursename: 'Graywolf', info: 'White' }
        , { id: 0, coursename: 'Graywolf', info: 'Green' }
        , { id: 0, coursename: 'Graywolf', info: 'Handicap' }
        , { id: 0, coursename: 'Graywolf', info: 'Par' }
        , { id: 0, coursename: 'Graywolf', info: 'Pace of Play' }
    ];

    constructor()
    {

    }

    getScoresheet()
    {
        return this._testScoresheet;
    }
}

export interface Scoresheet
{
    id: number;
    info: string;
    coursename: string;
}