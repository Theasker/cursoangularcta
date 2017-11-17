import { Librarian } from "./interfaces";

class UniversityLibrarian implements Librarian {
    private _department: string;
    private _name: string;
    private _email: string;

    public get department() : string {
        return this._department;
    }

    public get name() : string {
        return this._name;
    }

    public get email() : string {
        return this._email;
    }
    
    assisCustomer(data: string){
        console.log('Lo que haga la función...');
    }
}

// Clase abstracta que no se puede instanciar y tiene como múnimo un método abstracto
abstract class ReferenceItem {
    private data:number; // NO se puede acceder desde la clase heredada
    protected data2: number;
    // Método abstracto que no tiene implementación
    abstract printDocument(): void;
    constructor() {

    }
    doIt(){ }
}

class Magazine extends ReferenceItem {
    constructor() {
        super();
    }
    printDocument(): void {
        throw new Error("Method not implemented.");
    }
    doItAgain(){
        super.doIt();
        console.log(this.data2);
    }    
}

export {UniversityLibrarian};