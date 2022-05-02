import "./style.css";

const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");
const addButton = document.querySelector("form > button");

const todos = [
  {
    text: "je suis une todo",
    done: false,
    editMode: true,
  },
  {
    text: "faire du JavaScript",
    done: true,
    editMode: false,
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value);
});

const addTodo = (text) => {
  text = text.trim()
  if(text){
    todos.push({
      text,
      done: false,
      editMode: false,
    });
    displayTodo();
  }
  else{
    alert('Vous ne pouvez pas ajouter une todo vide');
  }
  
};

const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    if (todo.editMode) {
      return createTodoEditElement(todo, index);
    } else {
      return createTodoElement(todo, index);
    }
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  const buttonEdit = document.createElement("button");
  buttonEdit.innerHTML = "Edit";
  buttonDelete.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteTodo(index);
  });
  buttonEdit.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  const text = todo.text.charAt(0).toUpperCase() + todo.text.slice(1);
  li.innerHTML = `
      <span class="todo ${todo.done ? "done" : ""}"></span>
      <p>${text}</p>
    `;
  li.addEventListener("click", (event) => {
    toggleTodo(index);
  });
  li.append(buttonEdit, buttonDelete);
  return li;
};

const createTodoEditElement = (todo, index) => {
  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  const buttonSave = document.createElement("button");
  buttonSave.innerHTML = "Save";
  const buttonCancel = document.createElement("button");
  buttonCancel.innerHTML = "Cancel";
  buttonCancel.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleEditMode(index);
  });
  buttonSave.addEventListener("click", (event) => {
    editTodo(index, input);
  });
  li.append(input, buttonCancel, buttonSave);
  return li;
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
};

const toggleEditMode = (index) => {
  todos[index].editMode = !todos[index].editMode;
  displayTodo();
};

const toggleTodo = (index) => {
  todos[index].done = !todos[index].done;
  displayTodo();
};

const editTodo = (index, input) => {
  const value = input.value;
  todos[index].text = value;
  todos[index].editMode = false;
  displayTodo();
};



displayTodo();
