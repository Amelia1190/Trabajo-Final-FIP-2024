class ClinicaVeterinaria extends veterinaria {
    constructor(id: number, nombre: string, direccion: string, telefono: string) {
        super(id, nombre, direccion, telefono);
    }

    getEspecialidades(): string[] {
        return ['caninos', 'felinos', 'exóticos'];
    }
}

/*class HospitalVeterinario extends veterinaria {
    constructor(id: number, nombre: string, direccion: string, telefono: string) {
        super(id, nombre, direccion, telefono);
    }

    getEspecialidades(): string[] {
        return ['cirugía', 'urgencias', 'internismo'];
    }
}*/