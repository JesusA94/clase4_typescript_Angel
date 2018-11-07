//clase 4 TypeScript (abstract)
abstract class Figura{
    private _x:number
    private _y:number
    static _color:string
    protected cxt:CanvasRenderingContext2D

    public abstract dibujar();

    constructor(contexto:CanvasRenderingContext2D,x?:number,y?:number){
        this._x = (x==undefined) ? Math.random()*700 : x;
        this._y = (y==undefined) ? Math.random()*700: y;
        this.cxt = contexto;
    }
    public get x():number{
        return this._x;
    }
    public set x(x:number){
        this._x = x;
    }
    public get y():number{
        return this._y;
    }
    public set y(y:number){
        this._y = y;
    }
}
//clase 4 TypeScript
class Circulo extends Figura{

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
        this.cxt.beginPath;
        this.cxt.arc(this.x,this.y,this._radio,0,Math.PI*2);
        //Color es un atribulo estatico
        this.cxt.fillStyle=Figura._color;
        this.cxt.fill();
        this.cxt.closePath();
        this.cxt.stroke();
    }
}
class Triangulo extends Figura{
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
var canvas:any=document.getElementById("canvas")
var ctx=canvas.getContext("2d")

//llamado estatico
Figura._color="yellow"

new Circulo(ctx,).dibujar();
new Triangulo(ctx).dibujar();
new Triangulo(ctx).dibujar();

