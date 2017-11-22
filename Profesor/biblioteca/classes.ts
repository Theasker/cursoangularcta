import { Librarian, Author } from "./interfaces";



export class UniversityLibrarian implements Librarian {
    private _department: string;
    private _name: string;
    private _email: string;
    
    
    get department():string {
        return this._department;
    }

    get name():string {
        return this._name;
    }

    get email():string {
        return this._email;
    }

    //metodos
    assistCustomer(data:string){
        console.log('Lo que toque...');
    }
}

abstract class ReferenceItem {
    private _data: number;

    get data(): number {
        return this._data;
    }
    constructor(){
        this._data = 1;
    }

    doIt(){
    
    }

    //abstract printDocument(): void;
}

class Magazine extends ReferenceItem {
    //atributos
    //getres y seters
    constructor(){
        super();
    }

    doItAgain(){
        super.doIt();
        console.log(this.data);
        console.log('data')
    }
}

