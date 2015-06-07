/**************************************************************************************/
/*                             Prueba del modulo ANGULOS                              */
/*                                Cesar A. Pantoja                                    */
/*                                    Ver 1.0                                         */
/**************************************************************************************/

//Blink para asegurar que la aplicacion esta en modo RUN

var  l = false;
setInterval(function() {
  l = !l;
  LED1.write(l);
}, 500);


var CW1  = B13;
var CCW1 = B14;

var CW2  = E6;
var CCW2 = E5;

var CW3  = D11;
var CCW3 = B1;

var CW4  = E12;
var CCW4 = E7;

var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;

var angulo1 = 0;
var angulo2 = 0;
var angulo3 = 0;
var angulo4 = 0;



//Encoder 1
function ContadorEncoder1UP() {
        contador1 = contador1 + 1;
        angulo1 = contador1 * 0.03; // 12000 pulsos equivalen a 360 grados de la articulacion
        console.log(angulo1);
}

setWatch(ContadorEncoder1UP, CW1, { edge : 'rising', repeat: true});

function ContadorEncoder1DW() {
        contador1 = contador1 - 1;  // 12000 pulsos equivalen a 360 grados de la articulacion
        console.log(angulo1);
}

setWatch(ContadorEncoder1DW, CCW1, { edge : 'rising', repeat: true});

//Encoder 2
function ContadorEncoder2UP() {
        contador2 = contador2 + 1;
        angulo2 = contador2 * 0.024;  //15000 pulsos equivalen a 360 grados de la articulacion
        console.log(angulo2);
}

setWatch(ContadorEncoder2UP, CW2, { edge : 'rising', repeat: true});

function ContadorEncoder2DW() {
        contador2 = contador2 - 1;
        angulo2 = contador2 * 0.024;  //15000 pulsos equivalen a 360 grados de la articulacion
        console.log(angulo2);
}

setWatch(ContadorEncoder2DW, CCW2, { edge : 'rising', repeat: true});

//Encoder 3
function ContadorEncoder3UP() {
        contador3 = contador3 + 1;
        angulo3 = contador3 * 0.012; // 30000 pulsos equivalen a 360 grados de la articulacion
        console.log(angulo3);
}

setWatch(ContadorEncoder3UP, CW3, { edge : 'rising', repeat: true});

function ContadorEncoder3DW() {
        contador3 = contador3 - 1;
        angulo3 = contador3 * 0.012; //30000 pulsos equivalen a 360 grados de la articulacion
        console.log(angulo3);
}

setWatch(ContadorEncoder3DW, CCW3, { edge : 'rising', repeat: true});

//Encoder 4
function ContadorEncoder4UP() {
        contador4 = contador4 + 1;
        angulo4 = contador4 * 0.114; // 3157 pulsos equivalen a 359 grados de la articulacion 
        console.log(angulo4);
}

setWatch(ContadorEncoder4UP, CW4, { edge : 'rising', repeat: true});

function ContadorEncoder4DW() {
        contador4 = contador4 - 1;
        angulo4 = contador4 * 0.114; // 3157 pulsos equivalen a 359 grados de la articulacion
        console.log(angulo4);
}

setWatch(ContadorEncoder4DW, CCW4, { edge : 'rising', repeat: true});









