import "./style.css";

// function afficherLeResultat(promesse, resultat, tenue) {
//   const div = document.createElement("div");
//   div.innerText = `La promesse ${promesse} retourne ${resultat}`;
//   div.classList.add(tenue ? "succes" : "echec");
//   document.querySelector("#app").append(div);
// }

// function ajouterSeparateur() {
//   const sep = document.createElement("hr");
//   document.querySelector("#app").append(sep);
// }

// // Promsesses résolue et rejetée immédiatemment
// const p1 = new Promise(resolve => resolve(42));
// const p2 = new Promise((resolve, reject) => reject("plouf !"));

// p1.then(resultat => afficherLeResultat("p1", resultat, true));
// p2.then(
//   result => alert(result),
//   err => {
//     afficherLeResultat("p2", err, false);
//     ajouterSeparateur();
//   }
// );

// // Promsesses résolue et rejetée après 1 seconde
// const p3 = new Promise(resolve => setTimeout(() => resolve(22), 1000));
// const p4 = new Promise((resolve, reject) => setTimeout(() => reject(12), 1000));

// p3.then(resultat => afficherLeResultat("p3", resultat, true));
// p4.then(
//   result => alert(result),
//   err => {
//     afficherLeResultat("p4", err, false);
//     ajouterSeparateur();
//   }
// );

// Chainer des promesses

// const promesse = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("timeout ok!");
//     }, 3000);
// })

// promesse.then(result => {
//     console.log("then : ", result);
//     throw new Error('erreur');
//     //return "nouvelle valeur";
// }).then(result => {
//     console.log("then 2 : ", result);
// }).catch(err => {
//     console.log("err : ", err);
// });

// promesse.catch(err => {
//     console.log(err);
// });

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(2);
//     }, 2000);
// });

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 3000);
// });

// Promise.all([p1,p2,p3]).then( result => console.log(result).catch(err => console.log(err))); // Promise.all permet de vérifier que plusieurs promesses sont ok avant d'executer la suite du code. Si une fail > aucune promesse n'est passé au then
// Promise.allSettled([p1,p2,p3]).then(result => console.log(result)).catch(err => console.log(err)); // permet de passer malgré qu'une des 3 est rejected
// Promise.race([p1,p2,p3]).then(result => console.log(result)).catch(err => console.log(err)); // ne capture le then que de la première promesse résolue


