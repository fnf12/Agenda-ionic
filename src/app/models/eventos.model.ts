
export class Eventos {
    public title: string;
    public desc: string;
    public startTime: Date;
    public endTime: Date;
    public allDay: boolean;


    constructor(nombre: string, comentario: string, hinicio: Date, hfin: Date, tdia: boolean) {
        this.title = nombre;
        this.desc = comentario;
        this.startTime = hinicio;
        this.endTime = hfin;
        this.allDay = tdia;
    }

}
