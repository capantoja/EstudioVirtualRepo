/**************************************************************************************************
*                            TEATRO DE LA MEMORIA EN MUNDOS VIRTUALES
*                               UNIVERSIDAD NACIONAL DE COLOMBIA
*                                             2015
*     
*    Programa para el control de movimiento del podio virtual, implementado en el sistema  
*    STM32F4DISCOVERY.
*
*    Sistema Operativo RTOS: ChibiOs ver 2.6.8  Mayo 2015
*    Compilador gcc (Ubuntu/Linaro 4.8.1-10ubuntu9) 4.8.1
*
*    Encoder pinout (Entradas digitales):
*    CW1  = B13
*    CCW1 = B14
*    CW2  = E6
*    CCW2 = E5
*    CW3  = D11
*    CCW3 = B1
*    CW4  = E12
*    CCW4 = E7
*
*    PWM pinout (Salidas digitales):
*    PWM1 = E9
*    PWM2 = E11
*    PWM3 = E13
*    PWM4 = E14
*
*    Direccion de giro pinout (Salidas digitales):
*    dir1 = B7
*    dir2 = B8 
*    dir3 = B4
*    dir4 = B9
*
*    Uart 6 pinout (Servidor):
*    TX = C6
*    Rx = C7
*
*    Uart 2 pinout (Circuito de control de luces):
*    TX = A2
*    RX = A3
*
*    Trama de transmision del puerto serial ["S", "s", angulo1, angulo2, angulo3, angulo4, "E", "s"]
*    Trama de recepcion del puerto serial ["S", eje, velocidad, direccion, "E"]
*
**************************************************************************************************/
