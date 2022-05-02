import "./style.css";

const square = document.querySelector("div");
// const btn = document.querySelector("button");

// square.onmouseover = () => {
//     console.log("over !")
//     square.classList.add('red')
//     //square.style.backgroundColor = 'red'
// }
// square.onmouseout = () => {
//     console.log("out over !")
//     square.classList.remove('red')
// }

// ADD EVENT LISTENER

// square.addEventListener('mouseover', () => {
//      square.style.backgroundColor = 'red';
// }, {
//     once:true
// })

// square.addEventListener('mouseover', () => {
//     square.style.width = '300px';
//     square.style.height = '300px';
// })

// square.addEventListener('mouseout', () => {
//     square.style.backgroundColor = '#eee';
// })

// square.addEventListener('mouseout', () => {
//     square.style.width = '200px';
//     square.style.height = '200px';
// })

// SUPPRIMER UN GESTIONNAIRE ET DECLENCHER UN EVENT

// function becomeRed(){
//     square.style.backgroundColor = "red";
// }

// square.addEventListener( 
//   "mouseover",
//   becomeRed
// );

// square.addEventListener('mouseout', () => {
//     square.style.backgroundColor = '#eee';
//     square.removeEventListener("mouseover", becomeRed);
// });

// btn.addEventListener('click', () => {
//     square.dispatchEvent(new Event("mouseover"));
// });

// Le bouillonnement et la capture

// const span = document.querySelector("span");

// square.addEventListener('click', () => {
//     console.log("click on div");
// }, {
//     capture: true
// });


// span.addEventListener('click', () => {
//     console.log("click on span");
// }, {
//     capture: true
// });

// Empêcher le comportement par défaut et l'objet event en détails

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
})

input.addEventListener('click', (event) => {
    event.stopPropagation(); // Ne récupère pas les ancêtres du node
})

