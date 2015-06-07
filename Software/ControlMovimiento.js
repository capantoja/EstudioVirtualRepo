/**************************************************************************************/
/*                              Control de movimiento                                 */
/*                                Cesar A. Pantoja                                    */
/*                                    Ver 1.0                                         */
/**************************************************************************************/

//Blink para asegurar que la aplicacion esta en modo RUN

var  l = false;
setInterval(function() {
  l = !l;
 // LED1.write(l);
  digitalWrite(D12,l);
}, 500);



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

//Configuracion del puerto serial
// Formato del dato recibido ("S","articulacion","velocidad","direccion","E")
//articulacion = 1, 2, 3, 4
//velocidad = 0 a 100
//direccion = 0, 1



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

















