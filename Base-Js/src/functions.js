// Les expressions de fonction et leur déclaration

// declaration
// function func() {
//     console.log("func exec");
// }

// // expression
// const fn = function func2() {
//     console.log("func2 exec");
// }

// const fn2 = function() {
//     console.log("func2 exec");
// }

// console.log(fn.name);

// -----------------

// Paramètres, arguments et paramètres par défaut

// function func(param = 'default'){
//     if(param) {
//         console.log(param.toUpperCase());
//     }

// }

// func('param');

// -----------------

// Objet arguments et utilisation de l'opérateur Rest

// function operation(operateur, ...numbers) {
//     let total = 0;
//     if(operateur === '+'){
//         for(let i = 0; i < numbers.length;i++){
//             total += numbers[i]
//         }
//         console.log(total);
//     }

// }
// operation('+', 1, 2, 3, 4);

// -----------------

// Valeur de retour des fonctions

// function operation(operateur, ...numbers) {
//     let total = 0;
//     if(operateur === '+'){
//         for(let i = 0; i < numbers.length;i++){
//             total += numbers[i]
//         }
//         console.log(total);
//     }
//     // retour implicite des fonctions, 'return'
// }

// operation('+', 1, 2, 3, 4);

// -----------------

// La chaine de portée

// function a() {
//     console.log(foo);
// }

// function b() {
//     let foo = 1;
//     a();
// }

// let foo = 2;
// b(); // console log foo = 2

// function b() {
//     function a() {
//         console.log(foo);
//     }

//     let foo = 1;
//     a();
// }

// let foo = 2;
// b(); // console log foo = 1

// -----------------

// Définir ou lier this

// const a = {
//     foo: 'not bar'

// };

// const b = {
//   foo: "bar",
//   fn() {
//     function c() {
//       console.log(this);
//     }
//     c.call(a); // .call(this) spécifie le this; évite que la fonction c() renvoie window et reste dans le contexte de la fonction
//   },
// };

// b.fn();

// -----------------

// Les fonctions fléchées

// const a = (param, param2) => { // écriture de base d'une fonction flêchée a 2 params (remplace les parenthèses)
//   console.log(param);
//   console.log(param2);
// };
// a('a', 'b');

// const a = (b, c) => b + c; // écriture simplifiée pour retourner directement la valeur d'une fonction

// console.log(a(1, 2));

// const a = (b, c) => ({
//   b,
//   c,
//   total: b + c,
// }); // écriture de litérales

// console.log(a(1,2));


// const a = () => { // this dans une fonction flêchée. renvoie toujours le contexte du parent donc ici {} et non pas l'objet se trouvant dans b
//   console.log(this);
// };

// const b = {
//   foo: "bar",
// };

// a.call(b);
 
// const a = {
//     foo: "bar",
//     fn() {
//         const fn2 = () => {
//             console.log(this)
//         } 
//         fn2();
//     }
// };
 
// a.fn();

// -----------------

// Les fonctions de rappel (first class function; callback)

// function fn(a, cb) {
//     console.log('a: ', a);
//     const p1 = 1, p2 = 2;
//     cb(p1, p2);
// }

// fn('je suis a', (p1, p2) => {
//     console.log("cb", p1, p2)
// })

// -----------------

// closures

// function powerBy(power) {
//     return function(number){
//         return number ** power 
//     } 
// }

// powerBy(2)(3);

const a = () => {
    let arr = [];
    for(var i = 0; i < 3; i++) {
        arr.push(function(){
            console.log(i);
        })
    }
    return arr;
}

const tab = a();

tab[0]();
tab[1]();
tab[2]();

// -----------------
 

  