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


var Encabezado = 0;
var PrimerDato = 0;
var SegundoDato = 0;
var TercerDato = 0;
var Finalizador = 0;
var Contador = 0;




Serial6.setup(9600, {tx:C6,rx:C7});
Serial6.on('data', function (data) {


  if (data == 'S'){  
          Encabezado = data;
  }

  if (Contador == 1){
          PrimerDato = data;

  }

    if (Contador == 2){
          SegundoDato = data;

  }

    if (Contador == 3){
          TercerDato = data;
  }

  if (data == 'E'){
          Contador = 0;

  }
   Contador = Contador + 1;
});



//setInterval(function(){
//Serial6.write("S","1","2","3","E");
//console.log("Dato enviado");  
//}, 1000);









