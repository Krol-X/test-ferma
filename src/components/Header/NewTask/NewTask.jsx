import style from './NewTask.module.css';

import { Card } from '../../_shared/Card/Card';
import AddIcon from '@/assets/add-icon.svg?react'

export const NewTask = () => {
  return (
    <Card>
      <input className={style.edit} type='text' placeholder='Создать задачу' />
      <button className={style.add_button}>
        <AddIcon />
      </button>
    </Card>
  );
};
