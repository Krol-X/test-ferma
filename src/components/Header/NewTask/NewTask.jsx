import style from './NewTask.module.css';

import { Card } from '../../_shared/Card/Card';
import AddIcon from '@/assets/add-icon.svg?react'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/stores'

export const NewTask = () => {
  const [taskTitle, SetTaskTitle] = useState('')
  const dispatch = useDispatch();
  
  function createTask() {
    dispatch(actions.tasks.create(taskTitle))
    SetTaskTitle('')
  }

  return (
    <Card>
      <input className={style.edit} type='text' placeholder='Создать задачу'
        value={taskTitle} onChange={e => SetTaskTitle(e.target.value)}
      />
      <button className={style.add_button} onClick={createTask}>
        <AddIcon />
      </button>
    </Card>
  );
};
