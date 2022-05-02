// Introduction auux tableaux

// const arr = [1, 'deux', {foo: 'bar'}, [1,2,3]];

// const arr2 = Array(1, 2, 3);

// const arr3 = new Array(2, 3, 4);

// const arr4 = Array.from([1, 2, 3], nbr => nbr + 1); //permet de créer un tableau si ce qu'on lui passe est iterable (parcourable), peut prendre une fonction de callback

// console.log(Array.isArray({})); // false

// console.log(arr3);
// console.log(arr4);

// Accéder aux propriétés d'un tableau

// const arr = ["terre", "soleil", "lune"];

// console.log(arr[arr.length-1]); // last index

// arr.length = 0 ; // reset array

// console.log(arr);

// Imbrication de tableaux

// const arr = [["terre", "lune"], "soleil", ]; // tableaux imbriqués

// console.log(arr);

// Décomposition de tableaux et opérateur rest

// const arr = [1,2,3]; // notation standard
// // const arr = [[1,2],3]; notation standard & imbrication
// // const [[a,b], c] = arr; Imbrication & affection par décomposition
// // const [a,b, ...rest] = arr; // rest par décomposition
// // const [,b] = arr; // a partir du 2ème élément par décomposition
// // const [, ...arr2] = arr; a partir du 2ème & rest par décomposition

// let a = 'a';
// let b = 'b';

// [a,b] = [b,a]; // switch de valeur

// console.log('a :', a);
// console.log('b :', b);

// Ajouter des éléments à un tableau  

// let arr = [1,2,3]; 

// arr[0] = '1';
// arr.unshift(-1, 0);  // ajoute au début de l'array 
// arr.push(4, 5); // ajoute a la fin de l'array

// arr = [ ...arr, 6]; // spread operator après
// arr = [ -2, ...arr]; // spread operator avant 

// // const [a, ...arr]; // REST

// arr.splice(1, 0, -1.5);

// console.log(arr);

// Supprimer des éléments dans un tableau

// let arr = [1,2,3,4,5];  

// // arr.shift(); // supprime le 1er élément
// // arr.pop() // supprime le dernier élément

// // const [, ...arr2] = arr;

// arr.splice(2, 2);

// console.log(arr);

//Trouver des éléments dans un tableau

// const arr = ['un', 'deux', 'trois'];

// console.log(arr.indexOf('deux')); // type === 
// console.log(arr.includes("2")); // return true / false

// const arr = [
//     {name:"terre"},
//     {name:"lune"},
//     {name:"soleil"}
// ];

// const index = arr.findIndex(elem => elem.name === 'soleil');
// const elem = arr.find(elem => elem.name === 'soleil');

// console.log(elem);

// Copier un tableau

// const arr = [1,{name:'soleil'},3];

// //Shallow copy
// // const copy = arr.slice();
// // const copy = [...arr];
// // const copy = Array.from(arr);

// // deep copy
// const copy = JSON.parse(JSON.stringify(arr));
// //copy.push(4);

// copy[1].name = "lune" // modifie les 2 objets dans les tableaux;

// //b(arr);
// console.log(arr);
// console.log(copy);
 
// Fusionner un tableau

// const a = [1,2,3];
// const b = [4,5,6];
// const c = [7,8,9];

// const d = a.concat(b).concat(c); // avec concat
// const e = [...a,...b,...c]; //Avec spread operator -> à préferer


// console.log(d);

// Trier un tableau

// const a = [100, 2, 25]; // tri par ascii de contenu donc 100 est en 1er
// const b = ['banana', 'orange', 'ananas']; // trie par ordre alphabétique, si majuscule -> passe en 1er (a cause de l'ascii)
// const c = [{quantity:15},{quantity:10},{quantity:5}];

// a.sort((c,d) => c - d); // a.reverse trie dans l'autre sens

// b.sort((c, d) => c.localeCompare(d) * - 1); // trie les chaîne de caractère en ASC
// //b.sort((c, d) => c.localeCompare(d) * - 1); // trie les chaîne de caractère en DESC

// c.sort((c,d) => c.quantity - d.quantity);

// console.log(a);
// console.log(b);
// console.log(c);

// Itérer sur un Tableau

// const arr= [1,2,3];

// for(let i = 0; i<arr.length;i++){ // Ancienne façon d'itérer sur uun tableau
//     console.log(arr[i]);
// }

// for (let elem of arr){ // Nouvelle syntaxe ES6 
//     console.log(elem);
// }

// arr.forEach((value, index) => { // ES6 avec template literals & forEach
//     console.log(`value: ${value}, index: ${index}`);
// });

// Introduction à la programmation fonctionnelle

//const arr1 = ['UN', 'DEUX', 'TROIS'];
const arr2 = [{
        quantity:1,
        name:'CHAUSSURES',
        price:50
    }, 
    {
        quantity:1,
        name:'CHEMISES',
        price:20
    },
    {
        quantity:2,
        name: "PANTALON",
        price:70
    }
];

// -------
// const a = []

// arr1.forEach((value) => {
//     a.push(value.toLowerCase()); // Old way
// });

// -------

//const a = arr1.map((value) => value.toLowerCase()); // Nouvelle écriture

// -------

// const a = arr2.map(value => {
//     return value.name
// })

// -------

// const a = arr2.filter(item => {
//     return item.quantity > 5;
// })

// -------

// const a = arr2
// .filter(item => item.quantity >= 10)
// .map(item => {
//     return {
//         ...item,
//         name: item.name.toLowerCase()
//     };
// });

// -------

// console.log(a);

// Autres méthodes de programmation fonctionnelle 

const total = arr2.reduce((acc, value, index) => {
    console.log(`acc : ${acc}, value: ${value}, index: ${index}`); // utilise un accumulateur (ici 0) qui est disponible a chaque itération
    acc += value.price * value.quantity;
    return acc;
}, 0)

console.log(total);

