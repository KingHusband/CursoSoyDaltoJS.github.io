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