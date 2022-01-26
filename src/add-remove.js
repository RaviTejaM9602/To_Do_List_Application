const list = document.querySelector('.task-content');

let LIST = [];

export const addToDo = (toDo, id, done) => {
  const item = `
    <li class="todo-task" ${id}>
      <input type="checkbox" class="checkbox"
      ${done ? 'checked' : ''}
      id="${id}"/>
        <input class="input" type="text" value='${toDo}' id="${id}" readonly />
        <i class="far fa-trash-alt" id="${id}"></i>
        <i class="fa fa-ellipsis-v" id="${id}"></i>
    </li> `;
  list.insertAdjacentHTML('beforeend', item);
};

