const STORAGE = 'tasks-storage'
let id = 0

export const init = (values) => {
  let items = localStorage.getItem(STORAGE)
  if (!(items instanceof Array)) {
    items = values ?? []
  }
  items = items.map((task, idx) => ({ ...task, id: idx }))
  id = items.length + 1
  localStorage.setItem(items)
}

export const fetch = () => {
  return JSON.parse(localStorage.getItem(STORAGE));
}

export const create = (title) => {
  const tasks = fetch();
  const newTask = {
    id: id++,
    date: 'Сегодня',
    title: title,
    done: false
  };
  tasks.push(newTask);
  localStorage.setItem(name, JSON.stringify(tasks));
  return newTask;
}

export const update = (task) => {
  const tasks = fetch();
  const index = tasks.findIndex(t => t.id === task.id);
  if (index !== -1) {
    tasks[index] = task;
    localStorage.setItem(name, JSON.stringify(tasks));
  }
}

export const remove = (task_id) => {
  let tasks = fetch();
  tasks = tasks.filter(task => task.id !== task_id);
  localStorage.setItem(name, JSON.stringify(tasks));
}
