#!/bin/sh
cd build
sudo openocd -f interface/stlink-v2.cfg -c "set WORKAREASIZE 0x2000" -f target/stm32f4x_stlink.cfg -c "program ch.elf verify reset" 

