import { cliente } from "./Cliente";
import {Paciente} from "./Paciente";
import { Proveedores } from "./Proveedores";

export  class redVeterinaria {
    // protected id: number;
    // protected nombre: string;
    // protected direccion: string;
    // protected telefono: number;
    protected listaPacientes: Paciente[];
    protected listaProveedores: Proveedores[];
    protected listaCliente: cliente[];

    // constructor(id: number, nombre: string, direccion: string, telefono: number) {
    //     this.id = id;
    //     this.nombre = nombre;
    //     this.direccion = direccion;
    //     this.telefono = telefono;
    // }





    

// Dar de Baja 
public darDeBaja(pacienteId: number): boolean {
    const pacienteIndex = this.listaPacientes.findIndex(p => p.id === pacienteId);
    if (pacienteIndex !== -1) {
        this.listaPacientes.splice(pacienteIndex, 1);
        return true; // Se eliminó correctamente
    }
    return false; // Paciente no encontrado
}

// Dar de Alta
public darDeAlta(paciente: Paciente): void {
    this.listaPacientes.push(paciente);
}

// Modificar Paciente
public modificarPaciente(pacienteId: number): boolean {
    const pacienteIndex = this.listaPacientes.findIndex(p => p.id === pacienteId);
    if (pacienteIndex !== -1) {
        
        this.listaPacientes[pacienteIndex] = {
            ...this.listaPacientes[pacienteIndex],
        };
        return true;
    }
    return false;
}
}

