var canvas:any=document.getElementById("canvas")
var ctx=canvas.getContext("2d")
for(let i=0;i<5;i++){
    Figura._color=getColor(i);
    new Triangulo(ctx).dibujar();
    new Circulo(ctx).dibujar();
    // Figura._color=Colores[i];
}