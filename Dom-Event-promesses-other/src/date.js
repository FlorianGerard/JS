// *** Le format Date ***

// const today = new Date();
// const date = new Date(1000 * 3600);
// const date2 = new Date(2020, 0, 7, 10, 50)

// console.log(today.toString());
// console.log(date); 
// console.log(date2);  

// *** Les formats des Dates en chaîne de caractères ***

//  const today = new Date("2022-05-15T16:15:29.627Z"); // création de la date sous format ISO

//  console.log(today);
//  console.log(today.toISOString()); // Format pour stockage en DB
//  console.log(today.toUTCString()); // Date format UTC

// *** Manipulation des timestamps ***

// const date = new Date("2020-01-07T09:50:02.208Z");

// const date = Date.parse("2020-01-07T09:50:02.208Z");

// console.log(date);

//  const todayTimestamp = Date.now(); 

//  console.log((todayTimestamp - date.getTime()) / 1000 / 60);

// const date = Date.now();
// let date2

// setTimeout(() => {
//     date2 = Date.now();
//     const diff = date2 - date
//     console.log(diff); 
// }, 3000);

// *** L'API des objets Date ***

const date = new Date();

console.log(date.toISOString);

// console.log(date.getUTCDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getUTCHours()); // Format UTC de l'heure

// date.setHours(date.getHours() + 1); // incrémente sur l'heure / minute / secondes en fonction de la méthode

const date2 = new Date("2020-01-31T11:12:20.663Z");

date2.setDate(date2.getDate() +1) // incrémente le jour

console.log(date2.toJSON()); // convertit en format JSON, similaire au format ISO
