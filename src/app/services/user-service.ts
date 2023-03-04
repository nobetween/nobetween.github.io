import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    currentUser!: UserAccount;
    authenticated = false;
}

export interface UserAccount
{
    statuslink: string;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    access: string;
    status: string;
}