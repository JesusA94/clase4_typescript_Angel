import {Figura} from "./Figura"

export class Triangulo extends Figura{
    private h:number
    public dibujar(){
        this.cxt.beginPath();
        this.cxt.moveTo(this.x,this.y);
        this.cxt.lineTo(this.x-this.h/2,this.y+this.h);
        this.cxt.lineTo(this.x+this.h/2,this.y+this.h);
        this.cxt.closePath();
        this.cxt.fillStyle=Figura._color;
        this.cxt.fill();
        this.cxt.stroke();
    }
    constructor(contexto:CanvasRenderingContext2D,h?:number){
        super(contexto);
        this.h=(h==undefined)?Math.random()*100:h;
    }
}