// ● Proveedores: nombre, teléfono  y un id  generado
//  como los otros. La red debe contar con la opción
//  de alta, baja y modificación de los mismos.

export class Proveedor {
    nombre: string;
    telefono: string;
    id: number;

    constructor(nombre:string, telefono:string, id:number){
        this.nombre=nombre;
        this.telefono=telefono;
        this.id=id;
    }
}