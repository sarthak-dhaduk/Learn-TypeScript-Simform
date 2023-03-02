export default class stInfo {

    constructor(protected _fname:string,protected _lname:string) {
    }

    classData():string {
        return this._fname + " " + this._lname;   
    }
}