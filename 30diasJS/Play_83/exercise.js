/**
 * ELIMINAR ELEMENTOS DUPLICADOS DE UN ARRAY, 
 * Manteniendo el orden de los elementos
 * @param {*} values  Array de valores
 */
function removeDuplicates(values) {
    //eliminar duplicados usando set
    let set = new Set(values);
    //convertir set a array
    let arr = Array.from(set);
    return arr;
}

//EJEJMPLO 
//Input:
const fruits = [
    "melon",
    "melon",
    "mango",
    "banana",
    "apple",
    "banana",
    "apple",
];
console.log(removeDuplicates(fruits)) //Output: ["melon", "mango", "banana", "apple"]


//Ejemplo 2:
//Input:
const numbers = [1, 2, 3, 1, 2, 3];
console.log(removeDuplicates(numbers))  //Output: [1, 2, 3]