 import { redVeterinaria } from "./redVeterinaria";


 
export class Veterinaria {
    protected id: number;
    protected nombre: string;
    protected direccion: string;
    protected telefono: number;

    
    constructor(id: number, nombre: string, direccion: string, telefono: number) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    
}