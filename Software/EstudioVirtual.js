/**************************************************************************************/
/*                             Temporizador industrial                                */
/*                                Cesar A. Pantoja                                    */
/*                                    Ver 1.0                                         */
/**************************************************************************************/

//Blink para asegurar que la aplicacion esta en modo RUN
var  l = false;
setInterval(function() {
  l = !l;
  LED1.write(l);
}, 500);


var OnDelayI = 1;
var OnDelayII = 2;
var OffDelay = 3;
var FlickerI = 4;
var FlickerII = 5;
var Interval = 6;
var StarDelta = 7;
var Modo = 4;
var Shot = 1000; // duracion de la salida activada 0.05 seg a 5 seg 
var Time = 0;
var Off = 0;
var PresetTime = 5000; //Tiempo definido por el usuario
var Ton = 500;
var Toff = 500;



// Inicializa entrada "1" Decremental, "0" Incremental
pinMode(C1, "input_pullup");

//////////////////////// Temporizador Decremental ////////////////////////////////


function Temporizador() {
  console.log("temporizador incializado");
// Temporizador Incremental
  if(digitalRead(C1) === 0){
    console.log("contador en modo incremental");
    switch(Modo){
      case OnDelayI:
          setTimeout(OnDelayOut, PresetTime);
          Off = 0;
        break;
        
      case OnDelayII:
          setTimeout(OnDelayOutII, PresetTime);
          Off = 0;
        break;
        
      case OffDelay:
          digitalWrite(D12, 1);
          Off = 1;
          
        break;
      case FlickerI:
          FlickerFunction();
          Off = 0;
          
        break;
    }
  }
// Temporizador Decremental  
//  else {
  
  
  
 // }
  
  
}

function FlickerFunction(){
  
}



function OnDelayOut(){
  digitalWrite(D12, 1);
}

function OnDelayOutII() {
  digitalPulse(D12,1,Shot);
}

function ResetTemporizador(){

  if (Off === 1) {
    setTimeout(OffDelayFunction, PresetTime);
  }
  else {
    digitalWrite(D12, 0);
  }
}

function OffDelayFunction() {
    digitalWrite(D12, 0);
    off = 0;
}


// Señal de inicio del temporizador
setWatch(Temporizador, A0, { edge : 'rising', repeat: true, debounce : 1 }); //Cambiar a C0 en la version final
setWatch(ResetTemporizador, A0, { edge :  'falling', repeat: true, debounce : 1 });

  









