const STORAGE = 'tasks-storage'
let id = 0

export const init = (values) => {
  let { items, error } = fetch()
  if (error) {
    items = values ?? []
  }
  items = items.map((task, idx) => ({ ...task, id: idx }))
  id = items.length + 1
  localStorage.setItem(STORAGE, JSON.stringify(items))
}

export const fetch = (filter = null) => {
  try {
    let items = JSON.parse(localStorage.getItem(STORAGE));
    if (!(items instanceof Array)) {
      throw new Error(`Broken key ${STORAGE} format in localstorage`)
    }
    if (filter !== null) {
      items = items.filter(it => it.done === filter)
    }
    return { items, error: null };
  } catch (err) {
    return { items: null, error: err.message };
  }
};

export const create = (title) => {
  try {
    const tasks = fetch().items;
    const newTask = {
      id: id++,
      date: 'Сегодня',
      title: title,
      done: false,
    };
    tasks.push(newTask);
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    return { item: newTask, error: null };
  } catch (err) {
    return { item: null, error: err.message };
  }
};

export const update = (task) => {
  try {
    const tasks = fetch().items;
    const index = tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      tasks[index] = {
        id: task.id,
        date: task?.date ?? tasks[index].date,
        title: task?.title ?? tasks[index].title,
        done: task?.done ?? tasks[index].done,
      };
      localStorage.setItem(STORAGE, JSON.stringify(tasks));
    } else {
      return { item: null, error: `Cannot find task with id #{task.id}` };
    }
    return { item: tasks[index], error: null };
  } catch (err) {
    return { item: null, error: err.message };
  }
};

export const remove = (task_id) => {
  try {
    let tasks = fetch().items;
    tasks = tasks.filter((task) => task.id !== task_id);
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    return { id: task_id, error: null };
  } catch (err) {
    return { id: null, error: err.message };
  }
};
