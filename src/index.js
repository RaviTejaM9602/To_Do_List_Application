import './style.css';

const toDoTasks = [
  {
    description: 'Exercise for 30 min',
    completed: false,
    index: 0,
  },
  {
    description: 'Get Ready and breakfast',
    completed: true,
    index: 1,
  },
  {
    description: 'Study for 1 hour',
    completed: false,
    index: 2,
  },
];

const List = document.querySelector('.item-list');

const createList = () => {
  toDoTasks.forEach((task) => {
    const element = document.createElement('li');
    element.innerHTML = `<div class="left"><i class="far fa-square"></i> ${task.description} </div>
    <i class="fa fa-ellipsis-v"></i>`;
    element.classList.add('rows');
    List.appendChild(element);
  });
};

window.onload = createList();