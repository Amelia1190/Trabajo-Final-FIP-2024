import {generarId} from "./generadorId"

/* Proveedores: nombre, teléfono y un id generado como los otros.
 la red debe contar con la opción de alta, baja y modificación de los mismos. 
 IMPORTANTE: los id deben ser únicos, por lo tanto al generarse, antes de guardarlos se debe validar que no exista. 
 Si ya existe se debe volver a generar.*/  

export class Proveedor {
    private nombre: string;
    private telefono: number;
    private id: number;

    constructor (nombre: string, telefono: number) {
        this.nombre = nombre;
        this.id = generarId();
        this.telefono = telefono;  
    }



    // Getters
    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    getTelefono(): number {
        return this.telefono;
    }

    // Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setTelefono(telefono: number): void {
        this.telefono = telefono;
    }
}
    
