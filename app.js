const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list'); 
const todoInput = document.querySelector('.todo-input');
todoButton.addEventListener('click',addTodo);

function addTodo(e){
    //disable default behaviour(here submitting form)
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    //create new item
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //appending "li" to div
    todoDiv.appendChild(newTodo);

    //Creating Complete Button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = `<i class="far fa-check-circle"></i>`; 
    //appending complete button to div
    todoDiv.appendChild(completeButton);

    //creating Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    //Appending delete button to Div
    todoDiv.appendChild(deleteButton);

    //Finally appending the Div to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}