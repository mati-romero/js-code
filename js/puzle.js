/*Programacion de JavaScript*/

var piezas = document.getElementsByClassName('movil');

var tamWidh = 100;
var tamHeight = 100;

function Bloque(posicionX, posicionY) {
	this.posicionX = posicionX;
	this.posicionY = posicionY;
	this.vacio = true;
	this.vecinos = [];

	this.agregar_vecino = function (b) {
		this.vecinos.push(b);
	}

	this.es_vecino = function (b) {
		for (var i = 0; i < this.vecinos.length; i++) {
			if ((this.vecinos[i].posicionY == b.posicionY) && (this.vecinos[i].posicionX == b.posicionX)) {
				return true;
			}
		}

		return false;
	}
}

for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh);
	piezas[i].setAttribute("height",tamHeight);
	piezas[i].setAttribute("onclick","seleccionar_elemento(evt)");
}

piezas[0].setAttribute("x",100);
piezas[0].setAttribute("y",0);

piezas[1].setAttribute("x",200);
piezas[1].setAttribute("y",0);

piezas[2].setAttribute("x",0);
piezas[2].setAttribute("y",100);

piezas[3].setAttribute("x",100);
piezas[3].setAttribute("y",100);

piezas[4].setAttribute("x",200);
piezas[4].setAttribute("y",100);

piezas[5].setAttribute("x",0);
piezas[5].setAttribute("y",200);

piezas[6].setAttribute("x",100);
piezas[6].setAttribute("y",200);

piezas[7].setAttribute("x",200);
piezas[7].setAttribute("y",200);


var a = new Bloque(0,0);
var b = new Bloque(100,0);
var c = new Bloque(200,0);
var d = new Bloque(0,100);
var e = new Bloque(100,100);
var f = new Bloque(200,100);
var g = new Bloque(0,200);
var h = new Bloque(100,200);
var i = new Bloque(200,200);

a.agregar_vecino(b);
a.agregar_vecino(d);

b.agregar_vecino(a);
b.agregar_vecino(c);
b.agregar_vecino(e);

c.agregar_vecino(b);
c.agregar_vecino(f);

d.agregar_vecino(a);
d.agregar_vecino(e);
d.agregar_vecino(g);

e.agregar_vecino(d);
e.agregar_vecino(b);
e.agregar_vecino(f);
e.agregar_vecino(h);

f.agregar_vecino(c);
f.agregar_vecino(e);
f.agregar_vecino(i);

g.agregar_vecino(d);
g.agregar_vecino(h);

h.agregar_vecino(g);
h.agregar_vecino(e);
h.agregar_vecino(i);

i.agregar_vecino(h);
i.agregar_vecino(f);

var bloques = [a,b,c,d,e,f,g,h,i];

for (var i = 1; i < bloques.length; i++) {
	bloques[i].vacio = false;
}

function bloque_vacio(){
	for (var i = 0; i < bloques.length; i++) {
		if (bloques[i].vacio) {
			return bloques[i];
		}
	}
}

function buscar_bloque(x,y){
	for (var i = 0; i < bloques.length; i++) {
		if ((bloques[i].posicionX == x) && (bloques[i].posicionY == y)) {
			return bloques[i];
		}
	}
}

function seleccionar_elemento(evt){
	var bloqueVacio = bloque_vacio();
	var e = evt.target
	var bloqueActual = buscar_bloque(e.getAttribute("x"),e.getAttribute("y"));

	if (bloqueVacio.es_vecino(bloqueActual)) {
		e.setAttribute("x",bloqueVacio.posicionX);
		e.setAttribute("y",bloqueVacio.posicionY);
		bloqueVacio.vacio = false;
		bloqueActual.vacio = true;
		
		var t = test();

		if (t) {
			var win = document.getElementById("win");
			win.play();
		}
	}
}

function mover_pieza(n) {
	if (n >= 0 && n < piezas.length) {
		var pieza = piezas[n];
		var bloqueActual = buscar_bloque(pieza.getAttribute("x"),pieza.getAttribute("y"));
		var bloqueVacio = bloque_vacio();

		if (bloqueVacio.es_vecino(bloqueActual)) {
			pieza.setAttribute("x",bloqueVacio.posicionX);
			pieza.setAttribute("y",bloqueVacio.posicionY);
			bloqueVacio.vacio = false;
			bloqueActual.vacio = true;
		}
	}
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function mezclar() {

	for (var i = 0; i < 5000; i++) {
		mover_pieza(getRandomInt(0, 10));
	}
}

function test() {

	var key_0 = false;
	var key_1 = false;
	var key_2 = false;
	var key_3 = false;
	var key_4 = false;
	var key_5 = false;
	var key_6 = false;
	var key_7 = false;
	

	if ((piezas[0].getAttribute("x") == 100) && (piezas[0].getAttribute("y") == 0)) {
		key_0 = true;
		console.log("pieza 0");
	}


	if ((piezas[1].getAttribute("x") == 200) && (piezas[1].getAttribute("y") == 0)) {
		key_1 = true;
		console.log("pieza 1");

	}


	if ((piezas[2].getAttribute("x") == 0) && (piezas[2].getAttribute("y") == 100)) {
		key_2 = true;
		console.log("pieza 2");

	}


	if ((piezas[3].getAttribute("x") == 100) && (piezas[3].getAttribute("y") == 100)) {
		key_3 = true;
		console.log("pieza 3");

	}


	if ((piezas[4].getAttribute("x") == 200) && (piezas[4].getAttribute("y") == 100)) {
		key_4 = true;
		console.log("pieza 4");

	}


	if ((piezas[5].getAttribute("x") == 0) && (piezas[5].getAttribute("y") == 200)) {
		key_5 = true;
		console.log("pieza 5");

	}


	if ((piezas[6].getAttribute("x") == 100) && (piezas[6].getAttribute("y") == 200)) {
		key_6 = true;
		console.log("pieza 6");

	}


	if ((piezas[7].getAttribute("x") == 200) && (piezas[7].getAttribute("y") == 200)) {
		key_7 = true;
		console.log("pieza 7");

	}

	var key = (key_0 && key_1 && key_2 && key_3 && key_4 && key_5 && key_6 && key_7)

	return key;

}