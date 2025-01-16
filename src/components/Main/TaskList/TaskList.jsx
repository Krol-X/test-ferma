import style from './TaskList.module.css';

import TaskItem from './TaskItem';

export const TaskList = ({ items }) => {
  return (
    <div className={style.task_list}>
      {items.map(task => <TaskItem key={task.id} data={task} />)}
    </div>
  );
};
