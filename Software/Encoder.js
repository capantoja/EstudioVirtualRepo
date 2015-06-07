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

//var lcd = require("HD44780").connect(E6,E5,D11,B1,E12,E7);
//lcd.print("Hola");


var CW1  = B13;
var CCW1 = B14;
var CW2  = E6;
var CCW2 = E5;
var CW3  = D11;
var CCW3 = B1;
var CW4  = E12;
var CCW4 = E7;

var contador1 = 0;

//Encoder 1
function ContadorEncoder1UP() {
        contador1 = contador1 + 1;
        console.log(contador1);
}

setWatch(ContadorEncoder1UP, CW2, { edge : 'rising', repeat: true});

function ContadorEncoder1DW() {
        contador1 = contador1 - 1;
        console.log(contador1);
     
}

setWatch(ContadorEncoder1DW, CCW2, { edge : 'rising', repeat: true});


// lcd.clear(); 
// lcd.setCursor(0,0);
// lcd.print(" Contador:");

//function showData() {

// lcd.setCursor(4,1);
// lcd.print("D1 = "+ contador1);
//}
                                                                                                         //setInterval(showData, 1000);

                                                                                                         






















