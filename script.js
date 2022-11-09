//Seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');


//oi
//Funções


//Eventos (os eventos poderiam fazer tudo,não precisaria das funções, mas como algumas ações se repetem).
todoForm.addEventListener("submit", (event) => {

    event.preventDefault() //form não vai ser enviado quando pressionado o botão. Como estamos trabalhando front end, não queremos enviar form pro beck-end, então dou preventDeafult.
    
    const inputValue = todoInput.value

    if(inputValue) {
        console.log(inputValue)
    }
});