import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class GeofenceService
{
    private _testGeofenceTypes: GeofenceType[] = [
        { id: 0, typeid: 1, geofencetype: 'Water Hazard', permanent: 'YES' }
        , { id: 1, typeid: 2, geofencetype: 'Bunker', permanent: 'YES' }
        , { id: 2, typeid: 3, geofencetype: 'Out of Bounds', permanent: 'YES' }
        , { id: 3, typeid: 4, geofencetype: 'Fairway', permanent: 'YES' }
        , { id: 4, typeid: 5, geofencetype: 'Maintenance', permanent: 'YES' }
        , { id: 5, typeid: 6, geofencetype: 'Tee Box', permanent: 'YES' }
        , { id: 6, typeid: 7, geofencetype: 'Green', permanent: 'YES' }
    ];

    private _testGeofenceAreas: GeofenceArea[] = [
        { id: 0, coursename: 'Graywolf', geofencetype: 'Tee Box', holenum: 1 }
        , { id: 1, coursename: 'Graywolf', geofencetype: 'Tee Box', holenum: 2 }
        , { id: 2, coursename: 'Graywolf', geofencetype: 'Green', holenum: 1 }
        , { id: 3, coursename: 'Graywolf', geofencetype: 'Bunker', holenum: 2 }
        , { id: 4, coursename: 'Graywolf', geofencetype: 'Cart Path', holenum: 1 }
        , { id: 5, coursename: 'Graywolf', geofencetype: 'OB', holenum: 3 }
    ];

    private _id_index = 1;
    private _type_id_index = 1;

    private _area_id_index = 1;

    constructor()
    {

    }

    getNewGeofenceAreaID()
    {
        this._area_id_index++;
        return this._area_id_index;
    }

    getNewGeofenceID()
    {
        this._id_index++;
        return this._id_index;
    }

    getNewGeofenceTypeID()
    {
        this._type_id_index++;
        return this._type_id_index;
    }

    addGeofenceType(geofenceType: GeofenceType)
    {
        this._testGeofenceTypes.push(geofenceType);
    }

    updateGeofenceType(geofenceType: GeofenceType)
    {
        this._testGeofenceTypes.forEach(tempGeofenceType =>
        {
            if (tempGeofenceType.id === geofenceType.id)
            {
                tempGeofenceType = geofenceType;
            }
        });
    }

    removeGeofenceType(geofenceType: GeofenceType)
    {
        const index = this._testGeofenceTypes.indexOf(geofenceType);
        this._testGeofenceTypes.splice(index, 1);
    }

    getGeofenceTypes()
    {
        return this._testGeofenceTypes;
    }

    getGeofenceAreas()
    {
        return this._testGeofenceAreas;
    }

    addGeofenceArea(geofenceArea: GeofenceArea)
    {
        this._testGeofenceAreas.push(geofenceArea);
    }

    removeGeofenceArea(geofenceArea: GeofenceArea)
    {
        const index = this._testGeofenceAreas.indexOf(geofenceArea);
        this._testGeofenceAreas.splice(index, 1);
    }

    updateGeofenceArea(geofenceArea: GeofenceArea)
    {
        this._testGeofenceAreas.forEach(tempGeofenceAreas =>
        {
            if (tempGeofenceAreas.id === geofenceArea.id)
            {
                tempGeofenceAreas = geofenceArea;
            }
        });
    }
}

export interface GeofenceType
{
    id: number;
    typeid: number;
    geofencetype: string;
    permanent: string;
}

export interface GeofenceArea
{
    id: number;
    geofencetype: string;
    coursename: string;
    holenum: number;
}