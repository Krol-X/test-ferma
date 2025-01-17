import style from './NewTask.module.css';

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
    <div class={style.new_task}>
      <input className={style.edit} type='text' placeholder='Создать задачу'
        value={taskTitle} onChange={e => SetTaskTitle(e.target.value)}
      />
      <button className={style.add_button} onClick={createTask}>
        <AddIcon className={style.add_icon} />
      </button>
    </div>
  );
};
