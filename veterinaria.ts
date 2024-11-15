import {generarId} from "./generadorId"
import { Proveedor } from "./Proveedores";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";


/*Veterinarias: nombre, dirección, id (un número generado aleatoriamente al momento del alta) 
La red debe tener la posibilidad de dar de alta, modificar datos o dar de baja las mismas.  */

/*Pacientes (mascotas): las veterinarias deben contar con la opción de alta, baja y modificación de los mismos. */

  
/*Clientes: las veterinarias deben contar con la opción de alta, 
baja y modificación de los mismos. */


//clase Veterinaria
 
export class Veterinaria {
    protected id: number;
    protected nombre: string;
    protected direccion: string;
    protected telefono: number;
    private proveedores: Proveedor[]
    private clientes: Cliente[]
    private pacientes: Paciente []



    
    constructor(id: number, nombre: string, direccion: string, telefono: number) {
        this.id = generarId();
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

   //proveedores van en redveterinaria
    // Métodos provedor
    agregarProveedor(nombre:string, telefono: number): void {
        let nuevoProveedor = new Proveedor("nombre", 545454 );

        // Verifica que no exista ya un proveedor con el mismo ID
        while (this.proveedores.some((proveedor) => proveedor.getId() === nuevoProveedor.getId())) {
            nuevoProveedor = new Proveedor(nombre, telefono);
        }

        this.proveedores.push(nuevoProveedor);
        console.log(`Agregado nuevo proveedor ${nombre} con id ${nuevoProveedor.getId()}`);
    }

    eliminarProveedor(id: number): void {
        const index = this.proveedores.findIndex((proveedor) => proveedor.getId() === id);

        if (index > -1) {
            this.proveedores.splice(index, 1);
        } else {
            console.log("El ID ingresado no pertenece a ningún proveedor");
        }
    }



    // Métodos cliente
    agregarCliente(): void {
    }

    eliminarCliente(): void {
    }


    // Métodos paciente
    agregarPaciente(): void {
    }


    eliminarPaciente(): void {
    }


    // Getters
    getNombre(): string {
        return this.nombre;
    }
    
    

    getId(): number {
        return this.id;
    }

    getProvedores(): Proveedor[] {
        return this.proveedores;
    }

    getClientes(): Cliente[] {
        return this.clientes;
    }

    getPacientes(): Paciente[] {
        return this.pacientes;
    }

    // Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }


}
 
