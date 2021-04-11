export class ComunicadorService{
    estado:string="sobremi";
    constructor(){

    }

    getEstado():string{
    return this.estado;
    }

    setEstado(estado:string){
        this.estado=estado;

    }
}