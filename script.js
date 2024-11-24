document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
  
    // Load the ding sound
    const dingSound = new Audio('assets/ding.mp3');
  
    addTaskButton.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
  
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            taskItem.classList.add('completed');
            taskList.appendChild(taskItem); // Move to the bottom
            dingSound.play(); // Play the ding sound
          } else {
            taskItem.classList.remove('completed');
          }
        });
  
        const taskLabel = document.createElement('span');
        taskLabel.textContent = taskText;
  
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn-delete');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          taskItem.remove();
        });
  
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);
  
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input
      } else {
        alert('Please enter a task.');
      }
    });
  });
  