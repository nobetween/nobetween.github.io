import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PinService
{
    private _testPins: Pin[] = [
        { id: 0, coursename: 'Graywolf', holeNum: 1, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 1, coursename: 'Graywolf', holeNum: 2, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 2, coursename: 'Graywolf', holeNum: 3, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 3, coursename: 'Graywolf', holeNum: 4, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 4, coursename: 'Graywolf', holeNum: 5, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 5, coursename: 'Graywolf', holeNum: 6, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 6, coursename: 'Graywolf', holeNum: 7, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 7, coursename: 'Graywolf', holeNum: 8, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 8, coursename: 'Graywolf', holeNum: 9, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 9, coursename: 'Graywolf', holeNum: 10, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 10, coursename: 'Graywolf', holeNum: 11, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 11, coursename: 'Graywolf', holeNum: 12, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 12, coursename: 'Graywolf', holeNum: 13, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 13, coursename: 'Graywolf', holeNum: 14, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 14, coursename: 'Graywolf', holeNum: 15, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 15, coursename: 'Graywolf', holeNum: 16, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 16, coursename: 'Graywolf', holeNum: 17, center: true, a: true, b: true, c: true, d: true, e: true }
        , { id: 17, coursename: 'Graywolf', holeNum: 18, center: true, a: true, b: true, c: true, d: true, e: true }
    ];

    constructor()
    {

    }

    getPins()
    {
        return this._testPins;
    }
}

export interface Pin
{
    id: number;
    coursename: string;
    holeNum: number;
    center: boolean;
    a: boolean;
    b: boolean;
    c: boolean;
    d: boolean;
    e: boolean;
}