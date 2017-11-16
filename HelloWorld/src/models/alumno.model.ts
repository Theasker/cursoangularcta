export class Alumno{
    private _nombre: string;
    private _edad: number;
    private _curso: string;

    get nombre(): string {
        return this._nombre;
    }
    
    get edad(): number {
        return this._edad;
    }

    get curso(): string {
        return this._curso;
    }

    set nombre(n: string) {
        this._nombre = n;
    }

    set edad(r: number) {
        this._edad = r;
    }

    set curso(c: string) {
        this._curso = c;
    }

    constructor (n:string, e:number, c:string) {
        this._nombre = n;
        this._edad = e;
        this._curso = c;
    }
}
