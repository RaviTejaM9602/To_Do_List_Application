import './style.css';
import {  addToDo } from './add-remove.js';

const input = document.querySelector('.todoInput');
const refresh = document.querySelector('#refresh');

let LIST = '';
let id = '';
const data = localStorage.getItem('todoStore');

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

refresh.addEventListener('click', () => {
  localStorage.reload();
});

const pushToDo = () => {
  const data = localStorage.getItem('todoStore');
  if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    // loadList(LIST);
  } else {
    LIST = [];
    id = 0;
  }
  const toDo = input.value;
  if (toDo) {
    addToDo(toDo, id, false);

    LIST.push({
      name: toDo,
      index: id,
      done: false,
    });
    loadList(LIST);
    localStorage.setItem('todoStore', JSON.stringify(LIST));
    id += 1;
  }
  input.value = '';
};
document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    pushToDo();
  }
});
