/**************************************************************************************/
/*                     Sistema de control del Estudio Virtual                         */
/*                                Cesar A. Pantoja                                    */
/*                                    Ver 1.0                                         */
/**************************************************************************************/

//Blink para asegurar que la aplicacion esta en modo RUN
var  l = false;
setInterval(function() {
  l = !l;
  LED1.write(l);
}, 500);


// E6    rs
// E5    en
// D11   d4
// B1    d5
// E12   d6
// E7    d7

var lcd = require("HD44780").connect(E6,E5,D11,B1,E12,E7);
//lcd.print("Hola");

// var lcd = ... from simple example above ...
function showData() {
 lcd.clear();
 lcd.setCursor(0,0);
 lcd.print(" Current data:");
 lcd.setCursor(4,1);
 lcd.print("D1 = "+analogRead(D1));
}
                                                                                                                                                       setInterval(showData, 1000);









