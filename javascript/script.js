/*Pedir dos números y mostrar el resultado*/
function ejercicio1(){
    var numero1 = parseFloat(prompt('Escribe el primer número'));
    var numero2 = parseFloat(prompt('Escribe el segundo número'));
    console.log(numero1+numero2);
}

/*Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.*/
function ejercicio2(){
    var numero1= parseInt(prompt("Escribe el numero: "));
    if (numero1 >= 0){
        do {
            var resultado = numero1*numero1;
        } while(resultado == numero1**2){
            resultado += numero1;
        }
    } else {
        console.log("Has introducido un número negativo, solo admito positivos.");
    } return ejercicio2();
}

/*Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido.*/
function ejercicio3(){
    var numero = parseFloat(prompt('Escribe un numero'))
    var numeros = [numero];

    console.log('ejercicio 3')
}

/*Pedir números hasta que se introduzca uno negativo, y calcular la media.*/
function ejercicio4(){
    console.log('ejercicio 4')
}

/*Pedir un número N, y mostrar todos los números del 1 al N. */
function ejercicio5(){
    console.log('ejercicio 5')
}

//Escribir todos los números del 100 al 0 de 7 en 7.
function ejercicio6(){
    for ( let i = 100; i >= 0; i -= 7){
        console.log("El valor del número es: " + i);
    }
}

//Diseñar un programa que muestre el producto de los 10 primeros números impares.
function ejercicio7(){
    for( var i = 1; i <= 10; i++){
        var producto = i * i;
        if (i % 2 != 0){
        console.log(producto)
    }
}
}

//Pedir un número y calcular su factorial.
function ejercicio8(){
    var num = parseInt(prompt('Escribe un numero'));
    for(var i = 1; i < num; i++){
         var factorial = num*i;
        console.log('El factorial de ' + num + ' es = ' + factorial)
    }
}
//Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros.
function ejercicio9(){
    var contador = 0;
    var contadorPositivos = 0;
    var contadorNegativos = 0;
    var contadorCeros = 0;
    while(contador <=10){
        var num = parseInt(prompt('Escribe un numero'));
         var listaNumeros = document.write(num);
         contador++;
        if(num > 0){
            contadorPositivos++;
        } else if(num < 0) {
            contadorNegativos++;
        }
    }
    if (contadorPositivos > 0){
       var mediaPositivos = (num > 0) / contadorPositivos;
       document.write('La media de los números positivos es: ' + mediaPositivos);
    } else if (contadorNegativos > 0){
        var mediaNegativos = (num < 0) / contadorNegativos;
        document.write('La media de los números negativos es: ' + mediaNegativos);
    }
    if (listaNumeros == '0'){
        contadorCeros++;
        document.write('El total de 0 en los 10 números aportados es: ' + contadorCeros);
    }
}
//Pedir 10 sueldos. Mostrar su suma y cuantos hay mayores de 1000€.
function ejercicio10(){
var contador = 0;
var contadorMil = 0;
while(contador <=10){
    var sueldo = parseInt(prompt('Escribe un numero'));
    if (sueldo > 1000){
        contadorMil++;
        }
    document.write(sueldo);
    contador++;
    if (contador > 1 && contador  < 10){
         var sumaTotal = sueldo += sueldo;
    } else if (contador == 10){
        console.log('La suma total de los sueldos es: ' + sumaTotal);
        console.log('El número total de sueldos mayores a 1000 es: ' + contadorMil);
    }
}
}

//Pedir un número y mostrar si es primo o no.
function ejercicio11(){
    var num = parseInt(prompt('Escribe un numero'));
    for (var i = 2; i < num; i++){
        if (num % i == 0){
            console.log( num + ' No es primo');
        } else {
            console.log(num + ' Si es primo');
        }
    }

}

//Pedir un número y mostrar todos los números pares desde 1 hasta ese número.
function ejercicio12(){
    var num = parseInt(prompt('Escribe un numero'));
    for ( i = 1; i <= num; i++) {
        if ( i % 2 == 0) {
            console.log(i);
        }
    }
}