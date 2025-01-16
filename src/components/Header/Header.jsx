import style from './Header.module.css';
import NewTask from './NewTask';

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header__title}>Список дел</div>
      <NewTask />
    </div>
  );
};
