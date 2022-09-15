/* Problema Capítulo 1 */

/* let dineroRoberto = prompt("Roberto, ¿Cuánto dinero tienes?");
let dineroPedro = prompt("Pedro, ¿Cuánto dinero tienes?");
let dineroCofla = prompt("Cofla, ¿Cuánto dinero tienes?");

let vueltoCofla;

let preciosHelado = {
    PoteUnCuartoKgOConfites: 2.9, Helardo: 1.8, Heladovich: 1.7, Heladix: 1.6, PalitoCrema: 1, PalitoAgua: 0.6
};

if (dineroRoberto >= 2.9) {
    alert(`Roberto, con esa cantidad de dinero puedes comprar el pote de 1/4Kg o el potecito de helado con confites.`);
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert(`Roberto, con esa cantidad de dinero puedes comprar el bombón helado marca Helardo.`);
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert(`Roberto, con esa cantidad de dinero puedes comprar el bombón helado marca Heladovich.`);
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert(`Roberto, con esa cantidad de dinero puedes comprar el bombón helado marca Heladix.`);
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert(`Roberto, con esa cantidad de dinero puedes comprar el palito de helado de crema.`);
}
else if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert(`Roberto, con esa cantidad de dinero puedes comprar el palito de helado de agua.`);
}
else {
    alert(`Roberto, perdónanos, pero con esa cantidad de dinero no puedes comprar ningún helado.`);
}

if (dineroPedro >= 2.9) {
    alert(`Pedro, con esa cantidad de dinero puedes comprar el pote de 1/4Kg o el potecito de helado con confites.`);
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert(`Pedro, con esa cantidad de dinero puedes comprar el bombón helado marca Helardo.`);
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert(`Pedro, con esa cantidad de dinero puedes comprar el bombón helado marca Heladovich.`);
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert(`Pedro, con esa cantidad de dinero puedes comprar el bombón helado marca Heladix.`);
}
else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert(`Pedro, con esa cantidad de dinero puedes comprar el palito de helado de crema.`);
}
else if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert(`Pedro, con esa cantidad de dinero puedes comprar el palito de helado de agua.`);
}
else {
    alert(`Pedro, perdónanos, pero con esa cantidad de dinero no puedes comprar ningún helado.`);
}

if (dineroCofla >= 2.9) {
    vueltoCofla = parseInt(dineroCofla) - preciosHelado["PoteUnCuartoKgOConfites"];
    alert(`Cofla, con esa cantidad de dinero puedes comprar el pote de 1/4Kg o el potecito de helado con confites. Y tu vuelto es: $${vueltoCofla}.`);
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    vueltoCofla = parseInt(dineroCofla) - preciosHelado["Helardo"];
    alert(`Cofla, con esa cantidad de dinero puedes comprar el bombón helado marca Helardo. Y tu vuelto es: $${vueltoCofla}.`);
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    vueltoCofla = parseInt(dineroCofla) - preciosHelado["Heladovich"];
    alert(`Cofla, con esa cantidad de dinero puedes comprar el bombón helado marca Heladovich. Y tu vuelto es: $${vueltoCofla}.`);
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    vueltoCofla = parseInt(dineroCofla) - preciosHelado["Heladix"];
    alert(`Cofla, con esa cantidad de dinero puedes comprar el bombón helado marca Heladix. Y tu vuelto es: $${vueltoCofla}.`);
}
else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    vueltoCofla = parseInt(dineroCofla) - preciosHelado["PalitoCrema"];
    alert(`Cofla, con esa cantidad de dinero puedes comprar el palito de helado de crema. Y tu vuelto es: $${vueltoCofla}.`);
}
else if (dineroCofla >= 0.6 && dineroCofla < 1) {
    vueltoCofla = parseInt(dineroCofla) - preciosHelado["PalitoAgua"];
    alert(`Cofla, con esa cantidad de dinero puedes comprar el palito de helado de agua. Y tu vuelto es: $${vueltoCofla}.`);
}
else {
    alert(`Cofla, perdónanos, pero con esa cantidad de dinero no puedes comprar ningún helado.`);
} */

/* Capítulo 2 */

/* ARRAYS */

/* let array = ["dato0","dato1","dato2","dato3",...]; */

/* let frutas = ["banana","manzana","pera",5,9,"pedro"]; */

/* document.write(frutas); *//* document.write(frutas[0]); *//* document.write(frutas[1]); */
/* document.write(frutas[2]); *//* document.write(frutas[3]); *//* document.write(frutas[4]); */
/* document.write(frutas[5]); *//* document.write(frutas[6]); */

/* ARRAYS ASOCIATIVOS */

/* let pc1 = {
    nombre: "DanielPC",
    procesador: "Intel Core I3",
    ram: "8GB",
    espacio: "512GB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `Nombre del PC: <b>${nombre}</b>.<br>
         Procesador: <b>${procesador}</b>.<br>
         Ram: <b>${ram}</b>.<br>
         Espacio: <b>${espacio}</b>.`;

document.write(frase); */

/* BUCLES E ITERACIÓN */

/* While */

/* let número = 0;

while (número <= 6) {
    número++;
    document.write(número + "<br>");
} */

/* Primero verifico que se cumpla la condición y luego ejecuto la acción. Así sucesivamente hasta que la
condición se deje de cumplir. */

/* Do while */

/* let número = 0; */

/* do {
    número++;
    document.write(número + "<br>");
}
while (número <= 6) */

/* do {
    document.write(número + "<br>");
    número++;
}
while (número <= 6) */

/* do {
    document.write(número + "<br>");
    número++;
}
while (número > 6) */

/* Primero ejecuto la acción y luego verifico que se cumpla la condición. Así sucesivamente hasta que la
condición se deje de cumplir. */

/* Sentencia Break */

/* let número = 0;

while (número < 1000) {
    número++;
    document.write(número + "<br>");
    if (número == 10) {
        break;
    }
}

document.write("Fin."); */

/* Break hace que cuando se lea se termine el bucle. */

/* For */

/* for (declaramos e inicializamos; condición; aumento o decremento) */

/* for (let i = 0; i < 6; i++) {
    document.write(i + "<br>");
} */

/* for (let i = 6; i > 0; i--) {
    document.write(i + "<br>");
} */

/* i = 6, ¿i > 0? (true), se escribe i (6), resta i = i - 1 = 6 - 1 => i = 5, se ejecuta de nuevo el bucle.
i = 5, ¿i > 0? (true), se escribe i (5), resta i = i - 1 = 5 - 1 => i = 4, se ejecuta de nuevo el bucle.
i = 4, ¿i > 0? (true), se escribe i (4), resta i = i - 1 = 5 - 1 => i = 3, se ejecuta de nuevo el bucle.
i = 3, ¿i > 0? (true), se escribe i (3), resta i = i - 1 = 5 - 1 => i = 2, se ejecuta de nuevo el bucle.
i = 2, ¿i > 0? (true), se escribe i (2), resta i = i - 1 = 5 - 1 => i = 1, se ejecuta de nuevo el bucle.
i = 1, ¿i > 0? (true), se escribe i (1), resta i = i - 1 = 5 - 1 => i = 0, se ejecuta de nuevo el bucle.
i = 0, ¿i > 0? (false), no se escribe i (0), ya no se ejecuta de nuevo el bucle. */

/* Primero se establece el valor de la variable.
Luego se evalúa la condición.
Si se cumple se ejecuta la acción dentro del bloque, y luego se efectúa el aumento o el decremento. */

/* let i;

for (i = 6; i > 0; i--) {
    document.write(i + "<br>");
}

document.write(i); */

/* También se puede realizar el bucle for de esta manera. Creando la variable fuera del bucle y luego
definiéndola dentro del mismo. Esto hace que la variable conserve el valor modificado por el bucle luego de
finalizado el mismo. */

/* let i = 6;

for (i; i > 0; i--) {
    document.write(i + "<br>");
}

document.write(i); */

/* También se puede realizar el bucle for de esta manera. Creando y definiendo la variable fuera del bucle.
Esto también hace que la variable conserve el valor modificado por el bucle luego de finalizado el mismo. */

/* Break */

/* for (let i = 0; i < 20; i++) {
    document.write(i + "<br>");
    if (i == 12) {
        break;
    }
} */

/* También podemos definir que el bucle se detenga en un valor determinado */

/* for (let i = 0; i < 20; i++) {
    if (i == 12) {
        break;
    }
    document.write(i + "<br>");
} */

/* Antes o después de determinada acción. */

/* Continue */

/* for (let i = 0; i < 20; i++) {
    if (i == 12) {
        continue;
    }
    document.write(i + "<br>");
} */

/* Si queremos saltar un valor, entonces usamos "continue" para que ignore ese valor y continúe con el resto. */

/* For in y For of*/

/* let animales = ["gato","perro", "tiranosauro rex"];
animales.edad = 20;

for (let animal in animales) {
    document.write(animal + "<br>");
} */

/* Esta forma nos muestra la posición en la que están ubicados los elementos del array. */

/* document.write("<br>"); */

/* Si queremos que nos muestre el valor de los elementos usando for in, así como lo hace for of,
debemos hacer lo siguiente: */

/* for (let animal in animales) {
    document.write(animales[animal] + "<br>");
} */

/* document.write("<br>");

for (let animal of animales) {
    document.write(animal + "<br>");
}

document.write(animales.edad); */

/* Esta forma nos muestra el valor de los elementos del array. */

/* Label */

/* let array1 = ["maría","josefa","roberta"];
let array2 = ["pedro","marcelo",array1,"josefina"];

forN1:
for (let array in array2) {
    if (array == 2){
        for (let array of array1) {
            continue forN1;
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
} */

/* Funciones */

/* function saludar() {
    respuesta = prompt("¡Hola, Daniel!¿Cómo estuvo tu día?");
    if (respuesta == "Bien.") {
        alert("¡Gracias a Dios!")
    } else {
        alert("¡Qué mal! Pero todo estará bien, en el nombre de Jesús.")
    }
}

saludar();
saludar();
saludar(); */

/* saludar = function() {
    respuesta = prompt("¡Hola, Daniel!¿Cómo estuvo tu día?");
    if (respuesta == "Bien.") {
        alert("¡Gracias a Dios!")
    } else {
        alert("¡Qué mal! Pero todo estará bien, en el nombre de Jesús.")
    }
}

saludar(); */

/* Return */

/* function saludar() {
    alert("Hola.");
    return "La función se ejecutó correctamente."
} */

/* function saludar() {
    return "La función se ejecutó correctamente."
    alert("Hola.");
} */

/* let saludo = saludar();

document.write(saludo); */

/* Return le asigna a la función el valor que escribamos. Return finaliza la función.
Algo como una especia de break. Es decir, todo lo que aparezca en la función luego del Return no se va a
ejecutar.*/

/* Parámetros */

/* let num1 = 32, num2 = 12, res = num1 + num2;

document.write(res);
 */

/* function suma(num1,num2){
    let res = num1 + num2;
    return res;
}

let resultado = suma(20,25);

document.write(resultado); */

/* Forma 1 de crear una función. */

/* function saludar(nombre){
    let frase = `¡Hola, ${nombre}!¿Cómo estás?`;
    document.write(frase);
}

saludar("Pedro"); */

/* Forma 2 de crear una función. */

/* const saludar = function(nombre){
    let frase = `¡Hola, ${nombre}!¿Cómo estás?`;
    document.write(frase);
}

saludar("Pedro"); */

/* Función flecha */

/* const saludar = function(nombre){
    let frase = `¡Hola, ${nombre}!¿Cómo estás?`;
    document.write(frase);
}

saludar("Pedro"); */

/* const saludar = (nombre)=>{
    let frase = `¡Hola, ${nombre}!¿Cómo estás?`;
    document.write(frase);
}

saludar("Pedro"); */

/* Sí sólo estamos usando un parámetro, entonces no hace falta colocar paréntesis.

const saludar = (nombre)=>{}

const saludar = nombre =>{}*/

/* Sí sólo estamos aplicando una acción en la función, podemos hacer esto.

const saludar = nombre => {
    document.write(frase);
}

const saludar = nombre => document.write(frase);

Con la diferencia que en la 2da forma, el resultado de la función se retorna automáticamente.*/

/* Práctica Capítulo 2 */

/* A) Un joven muy afortunado logró ganar el primero premio de la lotería... exacto, estamos hablando del pobre
al que Cofla le dio una mano. Este pobre decide hacer una fiesta para festejar que salió de la pobreza.

Este millonario compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas... 

Lista de qué haceres:

-Dejar pasar solo a los mayores de edad.
-La primer persona que entre después de las 2 AM, no paga. */

/* let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cuál es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert(`Son las ${time}:00Hs. Eres la primera persona que pasa luego de esta hora, así que puedes pasar gratis.`);
            free = true;
        } else {
            alert(`Son las ${time}:00Hs. Tienes que pagar la entrada para poder pasar.`);
        }
    } else {
        alert("Perdón, pero no eres apto para consumir el contenido de esta fiesta. Vuelve a tu casa.");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3); */

/* B) Cofla vuelve de la comisaría exhausto, y por lo cansado que estaba se fue a dormir.
Al otro día, comienzan las clases del ciclo básico de la universidad (porque Cofla quiere ser programador,
y se inscribió en la facultad de ingeniería para estudiar desarrollo de software).

En su curso, en total, son 19 alumnos, pero surgió un problema que complicó un poco a la facultad:
se rompió el sistema de registro de asistencias, y durante los próximos 30 días no se podrán hacer registros
de datos de ningún tipo. Por ende, las clases no podrán comenzar hasta que esto esté solucionado. 

Lista de qué haceres:

-Crear mini-sistema que nos permita registrar los alumnos que estén presentes (P) y ausentes (A) en clase.
-Pasados los 30 días, mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
-Se puede tener un máximo de 10% de ausencias por sementre. Si se tienen más, aclarar que está reprobado. */

/* Matriz = Array

Matriz bidimensional = Array dentro de otro array*/

let cantidad = prompt(`¿Cuántos alumnos son?`);
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt(`Nombre del alumno ${(i+1)}`),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P"){
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presencias: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += `<br><b style='color:red'>REPROBADO POR INASISTENCIAS<b/><br><br>`;
    } else {
        resultado += `<br><br>`;
    }
    document.write(resultado);
}