//Definir variables 

const taskInput = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const taskContainer = document.querySelector('.tasks-list')

//Guardamos las tareas

let tasksList = [];

//Fncion para retornar HTML

const createTaskHTML = (task) => {
    return `
    <li>
    ${task.name}
    <img src='./img/delete.svg'
    class='delete-btn'
    data-id = "${task.id}"
    />
    </li>
    `
}

//Funcion para renderizar tareas
const renderTaskList = () => {
    taskContainer.innerHTML = tasksList.map((task) => createTaskHTML
        (task)).join('')
}

//Funcion para validar la tarea 

const isValidTask = (taskName) => {
    let isValid = true
    if (!taskName.length) {
        alert('ingresa la tarea boludito');
        isValid = false;
    } else if (tasksList.some(task => task.name == taskName)) {
        alert('la tarea ya existe');
        isValid = false;
    }
}

const addTask = (e) => {
    e.preventDefault();
    const taskName = taskInput.value.trim();

    if (isValidTask(taskName)) {
        tasksList = [...tasksList, { name: taskName, id: Date.now() }];
        renderTaskList();

    }
};

//Funcion inicializadora 
const init = () => {
    addForm.addEventListener('submit', addTask)
}

init()