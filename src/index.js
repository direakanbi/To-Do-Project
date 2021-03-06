import './styles.css';
import { checkEvent, checkboxState } from './storage';
import { setToLocalStorage, getFromLocalStorage } from './functions';

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

// addBooks list
const addBooks = () => {
  if (getFromLocalStorage() === null) {
    setToLocalStorage(toDoList);
  } else {
    const sortedList = getFromLocalStorage().sort((a, b) => a.index - b.index);
    sortedList.sort((x, y) => x.index - y.index);
    for (let i = 0; i < sortedList.length; i += 1) {
      if (sortedList[i].completed === true) {
        checkEvent(sortedList[i].index, true);
      } else {
        checkEvent(sortedList[i].index, false);
      }
      // create list item
      const list = document.querySelector('.list');
      list.insertAdjacentHTML(
        'beforeend',
        `
          <div class="task">
            <div class="checks">
              <input type="checkbox" name="item-${sortedList[i].index
}" class="checkbox" ${sortedList[i].completed ? 'checked' : ''}>
              <span class="checkmark" ${sortedList[i].completed
    ? 'style="text-decoration: line-through"'
    : ''
}>${sortedList[i].description}</span>
            </div>
            <div class="material-icons-outlined">more_vert</div>
          </div>
        `,
      );
      checkEvent();
    }
  }
};

window.onload = () => {
  checkboxState();
  addBooks();
};

export default { addBooks };
