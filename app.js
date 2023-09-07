//1
let array = [];
for(let i =0; i<10; i++){
    let newNumber = Math.floor(Math.random()*100);
    array.push(newNumber);
}
console.log("Arreglo con números generados al azar: " + array);
//2
let userPrompt = prompt('Ingresa varios valores separados por una coma, Ejemplo: Hola, como, estás, ?');
const userArray = userPrompt.split(",");
console.log(userArray); 
//3
const numberArray = [10,40,30,20,15,5];
const highestNumber = Math.max(...numberArray);
const lowestNumber = Math.min(...numberArray);
const orderArray = [];
const numberArraytoDelete = [10,40,30,20,15,5];
console.log(`El arreglo a ordenar será: ${numberArray}`)

for(let i = 0; i<numberArray.length; i++){
    //let newElement = orderArray.push(Math.max(...numberArraytoDelete));
    let newHighest = Math.max(...numberArraytoDelete);
    orderArray.push(newHighest);
    const index = numberArraytoDelete.indexOf(newHighest);
    numberArraytoDelete.splice(index,1); 
}

console.log(`El número más alto del arreglo es: ${highestNumber}, el número más bajo es: ${lowestNumber}`);
console.log(`El arreglo ordenado del número mayor a menor: ${orderArray}`);
