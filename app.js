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
    todoDiv.appendChild(newTodo);

    //Creating Complete Button
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    todoDiv.appendChild(completeButton);

    //creating Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    todoDiv.appendChild(deleteButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

todoList.addEventListener('click',function(e){
    const item = e.target;
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentNode;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',e =>{
            todo.remove();
        });
    }
    else if(item.classList[0]=== 'complete-btn'){
        const todo = item.parentNode;
        todo.classList.toggle('completed');
    }
})