// Get references to elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = taskText;
        listItem.addEventListener('click', toggleTask);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

// Toggle the completed state of a task
function toggleTask(event) {
    const listItem = event.target;
    listItem.classList.toggle('completed');
}

// Listen for "Enter" key press to add task
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});