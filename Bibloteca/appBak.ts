class Persona{
    private _nombre: string;
    private _dni: string;

    public get nombre() : string {
        return this._nombre;
    }

    public get dni() : string {
        return this._dni;
    }
    
    constructor(nom: string, dni: string){
        this._nombre = nom;
        this._dni = dni;
    }
    
    public findById(dni: string): Persona {
        return new Persona('','');
    }
}

function main(){
    // Inicializar 5 personas
    for(let i=0;i<5;i++){
        let p = new Persona('Name'+(i+1), 'dni'+(i+1));
        personas.push(p);        
    }
}

function viewInfo(){
    // Para recorrer los índices
    for (let index in personas){
        console.log(`Indice: ${index}`);
    }
    console.log('============================================');
    for (let p of personas){
        console.log(`Propiedad de clase: ${p.nombre}`);
    }
}

let personas:Array<Persona> = [];
main();
viewInfo();