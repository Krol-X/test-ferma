import style from './Main.module.css';

import { TaskList } from './TaskList/TaskList';
import { useTasks } from '@/hooks/useTasks'

export const Main = () => {
  const { tasks } = useTasks();

  return (
    <div className={style.main}>
      <TaskList items={tasks} />
    </div>
  );
};
