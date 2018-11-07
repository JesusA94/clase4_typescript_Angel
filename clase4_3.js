var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Colores;
(function (Colores) {
    Colores["blue"] = "blue";
    Colores["yellow"] = "yellow";
    Colores["red"] = "red";
    Colores["green"] = "green";
    Colores["orange"] = "orange";
})(Colores || (Colores = {}));
var Figura = /** @class */ (function () {
    function Figura(contexto, x, y) {
        this._x = (x == undefined) ? Math.random() * 600 : x;
        this._y = (y == undefined) ? Math.random() * 500 : y;
        this.cxt = contexto;
    }
    Object.defineProperty(Figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Figura;
}());
//clase 4 TypeScript
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(context, radio, x, y) {
        var _this = _super.call(this, context, x, y) || this;
        if (radio == undefined) {
            _this._radio = Math.random() * 100;
        }
        else
            _this._radio = radio;
        return _this;
    }
    Object.defineProperty(Circulo.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        set: function (radio) {
            this._radio = radio;
        },
        enumerable: true,
        configurable: true
    });
    Circulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.arc(this.x, this.y, this._radio, 0, Math.PI * 2);
        //Color es un atribulo estatico
        this.cxt.fillStyle = Figura._color;
        this.cxt.fill();
        this.cxt.closePath();
        this.cxt.stroke();
    };
    return Circulo;
}(Figura));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(contexto, h) {
        var _this = _super.call(this, contexto) || this;
        _this.h = (h == undefined) ? Math.random() * 100 : h;
        return _this;
    }
    Triangulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.moveTo(this.x, this.y);
        this.cxt.lineTo(this.x - this.h / 2, this.y + this.h);
        this.cxt.lineTo(this.x + this.h / 2, this.y + this.h);
        this.cxt.closePath();
        this.cxt.fillStyle = Figura._color;
        this.cxt.fill();
        this.cxt.stroke();
    };
    return Triangulo;
}(Figura));
//llamado estatico
function getColor(i) {
    switch (i) {
        case 0: return Colores.blue;
        case 1: return Colores.green;
        case 2: return Colores.orange;
        case 3: return Colores.red;
        case 4: return Colores.yellow;
        default:
            return Colores.blue;
    }
}
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
for (var i = 0; i < 5; i++) {
    Figura._color = getColor(i);
    new Triangulo(ctx).dibujar();
    new Circulo(ctx).dibujar();
    // Figura._color=Colores[i];
}
