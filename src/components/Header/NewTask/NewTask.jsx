import style from './NewTask.module.css';

import { Card } from '../../_shared/Card/Card';

export const NewTask = () => {
  return (
    <Card>
      <input className={style.edit} type='text' placeholder='Создать задачу' />
      <button className={style.add_button}>
        <img src='images/add-icon.svg' alt='+' />
      </button>
    </Card>
  );
};
