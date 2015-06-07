clear; 
Fs = 1000;                       % Sampling frequency
T = 1/Fs;                        % Sample time
Tf = 500;                        % miliseconds
t = (0:Tf) * T;                  % Time vector (milisecons)
PosInicial = 0;
PosFinal = 1;
a0 = PosInicial;
a1 = 0;
a2 = (3/(Tf)^2) * (PosFinal - PosInicial);
a3 = -(2/(Tf)^3)*(PosFinal-PosInicial);
aux = Tf/2;

Frenado = 225;


for K = 1:length(t)
    pos(K)  = a0 + a1 * K + a2 * K^2 + a3 * K^3;
    acel(K) = (2 * a2) + (6 * a3) * K;
    
% Arranque    
  if(K <= (Tf/2)) 
      vel(K)  = a1 + (2 * a2) * K + (3 * a3) * K^2
  end
  
%Velocidad constante  
  if(K > (Tf/2) && K <= Frenado)
      vel(K)  = 0.003; 
  end
  
%Frenado  
  if(K > Frenado)    
     vel(K)  = a1 + (2 * a2) * aux + (3 * a3) * aux^2;
     aux = aux + 1;
  end
   
end

%subplot(2,2,1);
%plot(t,pos);
%grid on;
%title('Generador de Trayectoria');
%ylabel('Posicion (Grados)');
%xlabel('Tiempo (Segundos)');
%hold on;

%subplot(2,2,2);
plot(t,vel);
grid on;
title('Generador de Trayectoria');
ylabel('Velocidad (Rad/Seg)');
xlabel('Tiempo (Segundos)');
hold on;

%subplot(2,2,3);
%plot(t,acel);
%grid on;
%title('Generador de Trayectoria');
%ylabel('aceleracion(rad/seg^ 2)');
%xlabel('Tiempo (Segundos)');
%hold on;
