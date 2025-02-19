// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function addTask() {
  const taskText = taskInput.value.trim();

  // Only add if input is not empty
  if (taskText !== '') {
    // Create list item and set its text content
    const li = document.createElement('li');
    
    // Create a span to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Create a delete button for the task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteButton);

    // Append the new task to the list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }
}

// Listen for clicks on the "Add" button
addTaskButton.addEventListener('click', addTask);

// Optionally, allow the Enter key to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
