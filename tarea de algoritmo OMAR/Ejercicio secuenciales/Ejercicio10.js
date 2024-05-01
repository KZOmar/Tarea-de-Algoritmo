// 10. Pedir al usuario dos números y mostrar el mayor.
// Entrada: numero3=0(leer), numero4=0(leer)
// Proceso:Si numero3 > numero4 entonces
 //            Escribir "El número mayor es:", numero3
 //        Sino
 //            Escribir "El número mayor es:", numero4
 // Pseudocodigo:
 // InicioAlgotimo ejercicio_10
 //  Escribir "Bienvenido, digita el primer número:"
 //  Leer numero3
 //  Escribir "Ahora, digita el segundo número:"
 //  Leer numero4
 //  Si numero3 > numero4 entonces
 //      Escribir "El número mayor es:", numero3
 //  Sino
 //      Escribir "El número mayor es:", numero4
 // FinAlgoritmo

 const read = require('prompt-sync')();
 const write = console.log

 function ejercicio_10(){
     numero3 = read("Bienvenido, digita el primer número:");
     numero4 = read("Ahora, digita el segundo número:");
     if (numero3 > numero4){
         write("El número mayor es:", numero3);
     }else{
         write("El número mayor es:", numero4);
     }
    
 }
 ejercicio_10();