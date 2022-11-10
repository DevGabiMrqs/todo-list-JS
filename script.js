//Seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
const finishTodo = document.querySelector('.finish-todo');

let oldInputValue;

//Funções
const saveTodo = (text) => {

    const todo = document.createElement("div") // criando uma div e adicionando a classe todo nela.
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3") //criando o título e colocando o texto nela.
    todoTitle.innerText = text
    todo.appendChild(todoTitle) // insere um novo nó na estrutura.

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const eraseBtn = document.createElement("button")
    eraseBtn.classList.add("erase-todo")
    eraseBtn.innerHTML = '<i class="fa-solid fa-x"></i>'
    todo.appendChild(eraseBtn)

    todoList.appendChild(todo)

    todoInput.value = "";
    todoInput.focus();
};

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

//Eventos (os eventos poderiam fazer tudo,não precisaria das funções, mas como algumas ações se repetem).
todoForm.addEventListener("submit", (event) => {
    event.preventDefault() //form não vai ser enviado quando pressionado o botão. Como estamos trabalhando front end, não queremos enviar form pro beck-end, então dou preventDeafult.
    
    const inputValue = todoInput.value
    if(inputValue) {
        saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if(parentEl && parent.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("erase-todo")) {
        parentEl.remove("erase");
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue.value = todoTitle
    }

});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
})












// finishTodo.addEventListener('click', () => {
//     finishTodo.style.background = "lightblue"
// })

// finishTodo.addEventListener('click', darCor)

// function darCor() {
//     finishTodo.style.background = "lightblue"
// }