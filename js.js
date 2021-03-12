const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', dltchk);


function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
const cmplBtn = document.createElement('button');
cmplBtn.classList.add("cmpl-btn");
cmplBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
todoDiv.appendChild(cmplBtn);

const trsBtn = document.createElement('button');
trsBtn.classList.add("trs-btn");
trsBtn.innerHTML = '<i class="fas fa-minus-circle"></i>';
todoDiv.appendChild(trsBtn);

todoList.appendChild(todoDiv);
todoInput.value = "";
}

function dltchk(e){
    const item = e.target;
    if(item.classList[0] === "trs-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === "cmpl-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}