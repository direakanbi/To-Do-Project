import { setToLocalStorage, getFromLocalStorage, reloadToDo } from './storage.js';
import { refreshStore } from './functions';

const editToDo = () => {
  const toDoList = document.getElementsByClassName('task');
  for (let i = 0; i < toDoList.length; i += 1) {
    const taskLabel = toDoList[i].children[0].children[1];
    taskLabel.addEventListener('click', () => {
      refreshStore();
    });
  }
};

const addToDo = () => {
  const buttons = document.getElementsByClassName('delete');
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      const index = `item-${i}`;
      const inputItem = document.getElementsByName(index)[0];
      inputItem.parentElement.parentElement.remove();
      refreshStore();
      window.location.reload();
    });
  }
};

const appendToDo = (task) => {
  const taskList = document.createElement('example');
  taskList.innerHTML = `
          <div class="task">
          <div class="checks">
            <input type="checkbox" name="item-${task.index}" readonly="true">
            <label for="item-${task.index}" style="text-decoration: none;" contenteditable=true>${task.description}</label>
          </div>
          <div class="buttons-end">
            <div class="material-icons-outlined">more_vert</div>
            <span class="material-icons-outlined delete" id="item-${task.index}">delete_outline</span>
          </div>
        </div>
      `;
};

const createToDo = (description) => {
  const newTask = {
    description,
    completed: false,
    index: 0,
  };

  const stateList = getFromLocalStorage();
  const todoLength = stateList.length;
  if (stateList.length === 0) {
    newTask.index = 0;
  } else {
    newTask.index = todoLength;
  }

  stateList.push(newTask);
  setToLocalStorage(stateList);
  appendToDo(newTask);
  reloadToDo();
  editToDo();
  addToDo();
};

document.querySelector('.input > input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createToDo(e.target.value);
    console.log('object');
    window.location.reload();
    e.target.value = '';
  }
});

const clearAll = () => {
  document.querySelector('.clear').addEventListener('click', () => {
    const toDoList = document.getElementsByClassName('task');
    [...toDoList].filter((toDoList) => toDoList.children[0].children[0].checked)
      .forEach((item) => item.remove());
    refreshStore();
  });
};

export { addToDo, editToDo, clearAll };