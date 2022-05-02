import "./style.css";

// const p = document.querySelector('p');
// const section = document.querySelector('section');
// const a = document.querySelector('a');
// const input = document.querySelector('input');
// const img = document.querySelector('img');

// Changer les attributs & notation proxy

// img.src = "http://blog.engineering.publicissapient.fr/wp-content/uploads/2016/03/javascript-ES62.png"; // accède direction a l'attribut SRC de l'img
// img.alt = "salut";

// a.href = "#test";

// -------------------------

// Attributs & propriétés

// console.log(img.getAttribute("data")); // récupère la valeur de data
// console.log(img.setAttribute("data", "salut")); // Modifie une valeur / la crée
// img.removeAttribute("data") // retire l'attribut
// console.log(img.getAttribute("data"));

// console.log(input.dataset.username);

// L'exemple de l'élément HTMLInputElement

// input.focus();

// setTimeout(() => {
//     input.blur();
// }, 1000);

// input.type = "password";
// input.value = "123";
// input.placeholder = "hello"
// input.minLength = 5;
// input.maxLength = 20;

// input.max = 50

// input.disabled = true;
// input.disabled = false;

// console.log(input.validity);

// -------------------------

// Modification du style et des classes

// img.style.width = '500px';
// section.style.width = '200px';
// section.style.backgroundColor = 'red';
// console.log(window.getComputedStyle(section));

//section.className = 'red';
// section.classList.add('red');
// section.classList.remove('red');

// -------------------------

// Créer des nœuds

// const app = document.querySelector('#app');

// const section = document.createElement('section');

// const image = document.createElement('img');
// const imageSrc = document.createAttribute('src');
// imageSrc.value = "http://tsr-industrie.fr/wp-content/uploads/2016/04/ef3-placeholder-image.jpg" 
// image.setAttributeNode(imageSrc);

// const paragraphe = document.createElement('p');
// const paragrapheClass = document.createAttribute('class');
// paragrapheClass.value = "text-primary";
// const paragrapheText = document.createTextNode('Je suis un paragraphe');
// paragraphe.setAttributeNode(paragrapheClass);

// const a = document.createElement('a');
// const aHref = document.createAttribute('href');
// aHref.value = "https://dyma.fr";
// const aText = document.createTextNode("Dyma");
// a.setAttributeNode(aHref)

// const comment = document.createComment("je suis un commentaire");

// app.appendChild(section);
// section.append(image);

// section.insertAdjacentElement('afterbegin',paragraphe);

// paragraphe.append(paragrapheText, a);
// a.appendChild(aText);

// paragraphe.insertBefore(comment, a);
// -------------------------

// Supprimer des noeuds

const p = document.querySelector(".text-primary");

console.log(p);

p.parentElement.removeChild(p); // pointe l'élément parent pour supprimer l'enfant
p.remove();

const span = document.createElement('span');

// -------------------------


