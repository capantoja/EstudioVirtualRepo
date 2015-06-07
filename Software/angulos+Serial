/**************************************************************************************/
/*                             Prueba del modulo ANGULOS + SERIAL                     */
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

var DatoRecibido;
var Articulacion;
var Direccion;
var Velocidad;

var PWM1 = E9;
var PWM2 = E11;
var PWM3 = E13;
var PWM4 = E14;

var DIR1 = B7;
var DIR2 = B8;
var DIR3 = B4;
var DIR4 = B9;

var VelocidadEje1 = 0.65;
var VelocidadEje2 = 0.65;
var VelocidadEje3 = 0.65;
var VelocidadEje4 = 0.65;

var contador = 0;




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
        EnviarDato();
}

//setWatch(ContadorEncoder2UP, CW2, { edge : 'rising', repeat: true});

function ContadorEncoder2DW() {
        contador2 = contador2 - 1;
        angulo2 = contador2 * 0.024;  //15000 pulsos equivalen a 360 grados de la articulacion
        EnviarDato();
}

//setWatch(ContadorEncoder2DW, CCW2, { edge : 'rising', repeat: true});

//Encoder 3
function ContadorEncoder3UP() {
        contador3 = contador3 + 1;
        angulo3 = contador3 * 0.012; // 30000 pulsos equivalen a 360 grados de la articulacion
        EnviarDato();
}

setWatch(ContadorEncoder3UP, CW3, { edge : 'rising', repeat: true});

function ContadorEncoder3DW() {
        contador3 = contador3 - 1;
        angulo3 = contador3 * 0.012; //30000 pulsos equivalen a 360 grados de la articulacion
        EnviarDato();
}

setWatch(ContadorEncoder3DW, CCW3, { edge : 'rising', repeat: true});

//Encoder 4
function ContadorEncoder4UP() {
        contador4 = contador4 + 1;
        angulo4 = contador4 * 0.114; // 3157 pulsos equivalen a 359 grados de la articulacion 
        EnviarDato();
}

setWatch(ContadorEncoder4UP, CW4, { edge : 'rising', repeat: true});

function ContadorEncoder4DW() {
        contador4 = contador4 - 1;
        angulo4 = contador4 * 0.114; // 3157 pulsos equivalen a 359 grados de la articulacion
        EnviarDato();
}

setWatch(ContadorEncoder4DW, CCW4, { edge : 'rising', repeat: true});

function Movimiento() {

// Movimiento articulacion 1
  if (Articulacion == '1' &&  Velocidad != '0') {
    analogWrite(PWM1, VelocidadEje1, { freq : 10000 });
  }
  else {
    analogWrite(PWM1, 0.0, { freq : 10000 });
  }
  
// Movimiento articulacion 2
  if (Articulacion == '2' &&  Velocidad != '0') {
    analogWrite(PWM2, VelocidadEje2, { freq : 10000 });
  }
  else {
   analogWrite(PWM2, 0.0, { freq : 10000 });
  }
  
// Movimiento articulacion 3
  if (Articulacion == '3' &&  Velocidad != '0') {
    analogWrite(PWM3, VelocidadEje3, { freq : 10000 });
  }
  else {
   analogWrite(PWM3, 0.0, { freq : 10000 });
  }
  
// Movimiento articulacion 4
  if (Articulacion == '4' &&  Velocidad != '0') {
    analogWrite(PWM4, VelocidadEje4, { freq : 10000 });
  }
  else {
   analogWrite(PWM4, 0.0, { freq : 10000 });
  }
  
//controla la direccion de giro del motor 1
  if (Articulacion == '1' && Direccion == '1') {
    digitalWrite(DIR1,1);
  }
  else {
    digitalWrite(DIR1,0);
  }
  
//controla la direccion de giro del motor 2
  if (Articulacion == '2' && Direccion == '1') {
    digitalWrite(DIR2,1);
  }
  else {
    digitalWrite(DIR2,0);
  }
  
//controla la direccion de giro del motor 3
  if (Articulacion == '3' && Direccion == '1') {
    digitalWrite(DIR3,1);
  }
  else {
    digitalWrite(DIR3,0);
  }
  
//controla la direccion de giro del motor 4
  if (Articulacion == '4' && Direccion == '1') {
    digitalWrite(DIR4,1);
  }
  else {
    digitalWrite(DIR4,0);
  }

  }

Serial6.setup(9600, {tx:C6,rx:C7});
Serial6.on('data', 
           function (data) {
  if (data == 'S'){
           DatoRecibido = data;
  }

  if (Contador == 2){
          Articulacion = data;

  }

    if (Contador == 3){
          Velocidad = data;

  }

    if (Contador == 4){
          Direccion = data;
  }

  if (data == 'E'){
          Contador = 0;
          Movimiento();
  }
   Contador = Contador + 1;
});


function EnviarDato(){
 // Serial6.write("S", angulo1, angulo2, angulo3, angulo4, "E");
   console.log(Velocidad);
}








