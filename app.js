const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list'); 
const todoInput = document.querySelector('.todo-input');
const filterOption = document.querySelector('.filter-todo');

document.addEventListener('DOMContentLoaded',getTodos);

todoButton.addEventListener('click',addTodo);

filterOption.addEventListener('click',addFilterTodo);

function addTodo(e){
    //disable default behaviour(here submitting form)
    e.preventDefault();
    if(todoInput.value !== ''){
        //saving to local storage
        saveLocalTodos(todoInput.value);

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
}

todoList.addEventListener('click',e => {
    const item = e.target;
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentNode;
        todo.classList.add('fall');
        todo.addEventListener('transitionend',e =>{
            todo.remove();
        });
        
        removeLocalTodo(todo.innerText);
    }
    else if(item.classList[0]=== 'complete-btn'){
        const todo = item.parentNode;
        todo.classList.toggle('completed');
    }
})
function saveLocalTodos(todo){
    let todos;
    if( localStorage.getItem('todos') === null ){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));  
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}
function removeLocalTodo(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.splice(todos.indexOf(todo),1);
    localStorage.setItem('todos',JSON.stringify(todos));
}
function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerText = todo;
        todoDiv.appendChild(todoItem);

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.innerHTML= `<i class="fas fa-check"></i>`;
        todoDiv.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
        deleteBtn.classList.add('delete-btn');
        todoDiv.appendChild(deleteBtn);

        todoList.appendChild(todoDiv);
    });
}
function addFilterTodo(e){
    let todos = todoList.childNodes;
    switch(e.target.value){
        case 'all':
                todos.forEach(todo =>{
                    todo.style.display = 'flex';
                });
                break;
        case 'completed':
                todos.forEach(todo=>{
                    if(todo.classList.contains('completed'))
                        todo.style.display = 'flex';
                    else todo.style.display = 'none';
                });
                break;
        case 'uncompleted':
            todos.forEach(todo=>{
            if(todo.classList.contains('completed'))
                todo.style.display = 'none';
            else todo.style.display = 'flex';
        });
        break;
    }
}