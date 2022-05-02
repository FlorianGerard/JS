// REQUETE TYPE GET

// const promesse = fetch("https://jsonplaceholder.typicode.com/users"); // default type = get - return a promise

// promesse
//   .then(async response => {
//     try {
//         //const users = await response.json(); // retour au format JSON
//         const users = await response.text(); // retour au format TEXT
//         console.log(users);
//     } catch(e) {
//         console.log(e)
//     }

//   })
//   .catch((err) => console.log(err)); // type cors = quand on fait une requête sur un autre serveur

// REQUETE TYPE POST

// const user = {
//   name: "tintin",
//   email: "tintin@gmail.com",
// };

// const promesse = fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   body: JSON.stringify(user),
//   headers: {
//     "Content-Type": "application/json",
//   },

// });

// promesse.then(async (response) => { 
//   try {
//     console.log(response);
//     const body = await response.json();
//     console.log(body);
//   } catch (e) {
//     console.log(e);
//   }
// });

// Abort controller - stop les appels API

// const controller = new AbortController;

// console.log(controller);

// controller.signal.addEventListener('abort', (event) => {
//   console.log(event);
// })

// controller.abort(); // agis sur toutes les promesses utilisant le signal de la const controller, ne s'utilise que sur le fetch

// const promesse = fetch('https://jsonplaceholder.typicode.com/users', {
//   signal: controller.signal
// });

// promesse
// .then(response => console.log(response))
// .catch(e => {console.log(e)});

// Objets FormData

const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(form);

  formData.append('name', '123');
  formData.set("email", "tintin@gmail.com");

  for(let pair of formData) {
    console.log(pair);
  }
  
  console.log(formData);

  fetch("", {
  method: "POST",
  body: formData
  });

});


