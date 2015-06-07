/**************************************************************************************/
/*                             Prueba del modudo PWM                                  */
/*                                Cesar A. Pantoja                                    */
/*                                    Ver 1.0                                         */
/**************************************************************************************/

//Blink para asegurar que la aplicacion esta en modo RUN
var  l = false;
setInterval(function() {
  l = !l;
  LED1.write(l);
}, 500);

var PWM1 = E8;
var PWM2 = E9;
var PWM3 = E10;
var PWM4 = E11;

var DIR1 = B7;
var DIR2 = B8;
var DIR3 = B4;
var DIR4 = B9;


analogWrite(D12, 0.5, { freq : 10000 });
analogWrite(PWM1, 0.5, { freq : 10000 });
analogWrite(PWM2, 0.5, { freq : 10000 });
analogWrite(PWM3, 0.5, { freq : 10000 });
analogWrite(PWM4, 0.5, { freq : 10000 });









