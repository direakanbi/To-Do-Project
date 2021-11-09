import './styles.css';

// call list
const list = document.querySelector('.list');

// task array of objects
const toDoList = [
  {
    description: 'Hack NASA',
    completed: false,
    index: 0,
  },
  {
    description: 'Start Webpack Project',
    completed: false,
    index: 1,
  },
  {
    description: 'Make Dinner',
    completed: true,
    index: 2,
  },
];

// populate list
const addToList = () => {
  // sort the array
  const listLoop = toDoList.sort((x, y) => x.index - y.index);

  // iterate
  for (let i = 0; i < listLoop.length; i += 1) {
    list.insertAdjacentHTML('beforeend', `
      <div class="task">
        <div>
          <input class="check" type="checkbox" name="item-${listLoop[i].index}">
          <label for="item-${listLoop[i].index}">${listLoop[i].description}</label>
        </div>
        <div class="material-icons-outlined">
          more_vert
        </div>
      </div>
      <hr>
    `);
  }
};

window.onload = addToList();