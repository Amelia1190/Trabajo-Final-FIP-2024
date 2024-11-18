// ● Clientes:  nombre,  teléfono,  si  es  VIP 
// (cliente recurrente, en el cual se guarda el número de
// visitas e incrementarlo cada vez que se realiza una
// y para ser VIP tiene que tener 5 o mas) y un id  
// (generado  igual  que  los  anteriores),  las 
// veterinarias deben contar con la opción de alta, baja
// y modificación de los mismos.

export class Cliente {
    nombre: string;
    telefono: string;
    vip: boolean;
    id: number;
    visitas: number;

    constructor(nombre:string, telefono:string, vip:boolean, id:number){
        this.nombre=nombre;
        this.telefono=telefono;
        this.vip=vip;
        this.id=id;
        this.visitas=0;
    }
}