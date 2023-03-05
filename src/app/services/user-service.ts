import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    private _testUsers: UserAccount[] = [
        { id: 0, statuslink: 'Review', email: 'christopher.s.briggs@gmail.com', firstname: 'Chris', lastname: 'Briggs', phone: '2039209393', access: 'Admin', status: 'Active', clubcode: '1', password: '89632147' }
        , { id: 1, statuslink: 'Pending Approve/Deny', email: 'TestMe@aol.com', firstname: 'Test', lastname: 'Me', phone: '4333454545', access: 'Basic', status: 'Disabled', clubcode: '1', password: 'test' }
    ];

    _currentUser!: UserAccount;
    private _authenticated = false;
    private _id_index = 1;

    constructor()
    {

    }

    authenticatUser(email: string, password: string)
    {
        this._testUsers.forEach(user =>
        {
            if (email === user.email && password === user.password)
            {
                this._currentUser = user;
                this._authenticated = true;
            }
        });

        return this._authenticated;
    }

    isAuthenticated()
    {
        return this._authenticated;
    }

    addUser(user: UserAccount)
    {
        this._testUsers.push(user);
    }

    setUser(user: UserAccount)
    {
        this._currentUser = user;
    }

    getCurretUser()
    {
        return this._currentUser;
    }

    getUserList()
    {
        return this._testUsers;
    }

    getNewUserID()
    {
        this._id_index++;
        return this._id_index;
    }

    updateUser(user: UserAccount)
    {
        this._testUsers.forEach(tempUser =>
        {
            if (tempUser.id === user.id)
            {
                tempUser = user;
            }
        });
    }
}

export interface UserAccount
{
    id: number;
    statuslink: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    access: string;
    status: string;
    clubcode: string;
}