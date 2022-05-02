// // Confusion var / let
// // Problème 1, confusion dans les blocs {} :
// var x = 1;
// if (true) {
//   var x = 2; // même variable, car sa portée n’est pas celle du bloc !
//   console.log(x); // 2
// }
// console.log(x); // 2

// // Problème 2, la portée n'est pas restreinte aux blocs {} :
// var a = 1;
// var b = 2;
// if (a === 1) {
//   var a = 3; // la portée est globale
//   let b = 4; // la portée est celle du bloc
//   console.log(a); // 3
//   console.log(b); // 4
// }
// console.log(a); // 3 
// console.log(b); // 2 

// // Problème 3, pas d'erreur levée en cas de déclarations multiples :
// // Vous aurez simplement un warning dans les navigateurs récents.
// var i = 1;
// var i = 2;
// var ajouter = function(a, b) {
//   return a + b;
// };
// var ajouter = function(a, b) {
//   return a + b;
// };

// // Problème 4 : problème des boucles avec de l'asynchrone :
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 10);
// }
