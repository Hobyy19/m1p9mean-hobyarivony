export interface IUser{
    _id : string;
    email: string;
    password: string;
}

export class User implements IUser {
    constructor ( public email : string , public password : string , public _id : string){
        this._id = _id ? _id : '';
        this.email = email ;
        this.password = password ;
    }
}