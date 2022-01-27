export const completeToDo = (LIST, element) => {
  const task = LIST.find((t) => t.index === Number(element.id));
  task.done = element.checked;
  localStorage.setItem('todoStore', JSON.stringify(LIST));
};

export const clearAll = (LIST) => {
  LIST = LIST.filter((t) => !t.done).map((t, i) => {
    t.index = i;
    return t;
  });
  localStorage.setItem('todoStore', JSON.stringify(LIST));

  return LIST;
};
