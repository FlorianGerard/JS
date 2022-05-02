// const a = {}; // object littéral
// const b = Object(); // object déclaration
// const c = new Object(); // object new
// console.log(a, b, c);
// ---------------------------------------------
// Les propriétés des objets

    // const terre = {
    //     population : 7e7,
    //     satellite : 'Lune',
    //     temperature : {
    //         min: -70,
    //         max: 60,
    //     },
    //     isOld: false,
    //     getTemperature() {
    //         console.log('15');
    //     }
    // };
 
    // const copy = terre; // stock l'objet terre dans copy

    // copy.isOld = true; // modifie l'objet se trouvant dans la heap (l'objet dans terre est modifié)

    // const prop = 'temperature';

    // console.log(terre[prop]);

    // terre.getTemperature();
// ---------------------------------------------
// Raccourcis syntaxique

// const population = 7e7;
// const satellite = "Lune";
// const temperature = {
//     min: -70,
//     max: 60,
// };

// const pop = "population";

// const terre = {
//     [pop] : population, // raccourci syntaxique
//     satellite,
//     temperature,
//     isOld:false,
// }

// console.log(terre);

// ---------------------------------------------
// La décomposition d'objet

// const population = 50;


// // const { population : populationTerre, satellite, temperature } = terre; // Notation ES6 - Reecriture
// const { temperature, ...reste } = terre; // Notation ES6 - Spread operator

// console.log(temperature, reste)

// ---------------------------------------------

// Tester l'existence d'un objet

// if(terre.hasOwnProperty("test")){ 
//     console.log('ok');
// }else{
//     console.log('ko')
// }
// if('population' in terre){ 
//     console.log('ok');
// }else{
//     console.log('ko')
// }

// Supprimer ou écarter des propriétés

// terre.satellite = null; toujours mettre null si on veut retirer la valeur d'un objet.
 
// const { population, ...copyTerre } = terre; permet de scinder un objet et de garder ce que l'on veut, ici on retirer population pour garder le reste.

// console.log(copyTerre);

// Fusionner des objets

// const terre1 = {
//     population : 7e7,
//     satellite : 'Lune',
   
// };

// const terre2 = {
//     temperature : {
//         min: -70,
//         max: 60,
//     },
//     isOld: false,
// }

// const terre = Object.assign({}, terre1, terre2); // Merger des objets initialiser un objet vide au début.

// const terre = { ...terre1, ...terre2 };

// console.log(terre);

// ---------------------------------------------

// Itérer sur des objets

// const obj = {
//     a: 'un',
//     b: 'deux',
//     c: 'trois'
// };

// for (prop in obj){
//     console.log(prop);
//     console.log(obj[prop]);
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// console.log(Object.entries(obj));

// ---------------------------------------------
