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

var DatoRecibido;
  var Articulacion;
  var Direccion;
  var Velocidad;

// E6    rs
// E5    en
// D11   d4
// B1    d5
// E12   d6
// E7    d7

var lcd = require("HD44780").connect(E6,E5,D11,B1,E12,E7);


var CW1 = B13;
var CCW1 = B14;

var contador1 = 0;

//Encoder 1
function ContadorEncoder1UP() {
        contador1 = contador1 + 1;
        console.log(contador1);
}

setWatch(ContadorEncoder1UP, CW1, { edge : 'rising', repeat: true});

function ContadorEncoder1DW() {
        contador1 = contador1 - 1;
        console.log(contador1);
}

setWatch(ContadorEncoder1DW, CCW1, { edge : 'rising', repeat: true});


Serial6.setup(9600, {tx:C6,rx:C7});
Serial6.on('data', 
           function (data) {
               console.log(data); 
               DatoRecibido = data + '';
               Articulacion = DatoRecibido.substring(2,3);
               Velocidad = DatoRecibido.substring(4,5);
               Direccion = DatoRecibido.substring(6,7);

});


 lcd.clear(); 
 lcd.setCursor(0,0);
 lcd.print(" Prueba serial");

function showData() {

 lcd.setCursor(4,1);
 lcd.print("        ");
 lcd.setCursor(0,1); 
 lcd.print("Arti = "+ DatoRecibido);
}
                                                                                                         setInterval(showData, 1000);

                                                                                                         






















