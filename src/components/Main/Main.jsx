import style from './Main.module.css';

import { TaskList } from './TaskList/TaskList';

const tasks = [
  {
    id: 1,
    date: 'Сегодня',
    title: 'Завершить проект по настройке Vite для темы WordPress.',
    done: true
  },
  {
    id: 2,
    date: 'Сегодня',
    title: 'Завершить написание SEO-текста с учетом всех требований.',
    done: false,
    _edited: true
  },
  {
    id: 3,
    date: 'Сегодня',
    title: 'Продолжить работу над кубиком Рубика в Three.js',
    done: false
  },
  {
    id: 4,
    date: 'Сегодня',
    title: 'Просмотреть новые видео по интересующим темам на YouTube.',
    done: false
  }
]

export const Main = () => {
  return (
    <div className={style.main}>
      <TaskList items={tasks} />
    </div>
  );
};
