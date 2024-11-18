// ● Pacientes (mascotas): nombre, especie
// (si no es perro o gato, deberá registrarse como exótica),
// id del  dueño,  las  veterinarias  deben  contar  con  la opción
// de alta, baja y modificación de los mismos.

export class Paciente {
    nombre:string;
    especie: string;
    idDueño: number;

    constructor (nombre:string, especie: string, idDueño:number){
        this.nombre=nombre;
        this.especie=especie;
        this.idDueño=idDueño;   
    }
}