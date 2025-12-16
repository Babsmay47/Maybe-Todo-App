import ThemeManager from "./theme.js";

let tasks = [];

const newTaskInput = document.querySelector('.js-task-input');
const newTaskDate = document.querySelector('.js-task-date');
const addNewTaskBtn = document.querySelector('.js-add-btn');



function addTask() {
  const task = {
    text: newTaskInput.value,
    date: newTaskDate.value
  }
  tasks.unshift(task);
  console.log(task);
  renderTasks();
}

function renderTasks() {
  let tasksHtml = '';
  tasks.forEach(task => {
    tasksHtml += `
      <div class="task-container">
        <p class="task-text">${task.text}</p>
        <p class="date">${task.date}</p>
      </div>
    `;
  });

  document.querySelector('.tasks-container').innerHTML = tasksHtml;
}

console.log(tasks);

document.addEventListener('DOMContentLoaded', () => {
  window.themeManager = new ThemeManager();
});