import {Paciente} from './paciente';


/*Clientes: nombre, teléfono, si es VIP (cliente recurrente, en el cual se guarda el número de visitas e 
incrementarlo cada vez que se realiza una y para ser VIP tiene que tener 5 o mas) 
y un id (generado igual que los anteriores), las veterinarias deben contar con la opción de alta, 
baja y modificación de los mismos. */

// Clase Cliente
 export class Cliente {
    private nombre:string;
    private telefono:number;
    private id:number;
    private numDeVisitas:number;
    private listaMascotas:Paciente [];
    
    //constructor
    public constructor(nombre:string, telefono: number,idDueño:number){
        this.nombre=nombre;
        this.telefono=telefono;
        this.id=idDueño;
        this.numDeVisitas=0
        this.listaMascotas=[];
    }
    

    //getters

    public getNombre():string{
        return this.nombre
    }
   
    public getTelefono():number{
        return this.telefono
    } 
    
    public getId(): number{
        return this.id
    } 

    public getnumDeVisitas():number{
        return this.numDeVisitas
    }
    public getListaMascotas():Paciente[]{
        return this.listaMascotas
    }



    //setter
    
    public setNombre(Nombre:string):void{
        this.nombre=Nombre
    }

   public setTelefono(Telefono:number):void{
        this.telefono=Telefono
    }

    public setnumDeVisitas(numDeVisitas:number):void{
        this.numDeVisitas=numDeVisitas  

    }

// contador para saber si es VIP
    public contadorVIP(cliente: Cliente): void {
        cliente.setnumDeVisitas(cliente.getnumDeVisitas() + 1);
        console.log(`Número de visitas: ${cliente.getnumDeVisitas()}`);
      
        if (cliente.getnumDeVisitas() >= 5) {
          console.log("!!Es cliente VIP!!");
        } else {
          console.log("El cliente no es VIP");
        }
    }

    
}
