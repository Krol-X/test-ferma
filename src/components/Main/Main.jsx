import style from './Main.module.css';

import Filter from './Filter';
import TaskList from './TaskList';
import useTasks from '@/hooks/useTasks'

export const Main = () => {
  const { tasks } = useTasks();

  return (
    <div className={style.main}>
      <Filter />
      <TaskList items={tasks} />
    </div>
  );
};
