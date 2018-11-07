import {Figura} from "./Figura"
export class Circulo extends Figura{

    private _radio:number

    constructor(context:CanvasRenderingContext2D
                ,radio?:number,x?:number,y?:number){

                super(context,x,y)
                if(radio==undefined){
                    this._radio=Math.random()*100;
                }else
                this._radio = radio;
    }               
    public get radio():number{

        return this._radio;
    }
    public set radio(radio:number){
        this._radio = radio;
    }
    public dibujar(){
        this.cxt.beginPath();
        this.cxt.arc(this.x,this.y,this._radio,0,Math.PI*2);
        //Color es un atribulo estatico
        this.cxt.fillStyle=Figura._color;
        this.cxt.fill();
        this.cxt.closePath();
        this.cxt.stroke();
    }
}