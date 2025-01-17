import style from './TaskItem.module.css';

import CheckBox from './CheckBox';
import EditIcon from '@/assets/edit-icon.svg?react'
import TrashIcon from '@/assets/trash-icon.svg?react'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '@/stores'

export const TaskItem = ({ data }) => {
  const titleStyle = style.title + (data.done ? ` ${style.done}` : '')

  const [taskEdited, SetTaskEdited] = useState(false)
  const [taskTitle, SetTaskTitle] = useState('')
  const dispatch = useDispatch();

  function doneItem() {
    dispatch(actions.tasks.update({ id: data.id, done: !data.done }))
  }

  function editItem() {
    SetTaskTitle(data.title)
    SetTaskEdited(true)
  }

  function undoEdit() {
    SetTaskEdited(false)
  }

  function saveItem() {
    dispatch(actions.tasks.update({ id: data.id, title: taskTitle }))
    SetTaskEdited(false)
  }

  function removeItem() {
    dispatch(actions.tasks.remove(data.id))
  }

  return (
    <div className={style.task_item}>
      <div className={style.header}>
        <div className={style.date}>{data.date}</div>
      </div>
      <div className={style.body}>
        <CheckBox checked={data.done} onClick={doneItem} />
        {taskEdited ? (
          <input className={style.title_edit} type='text'
            value={taskTitle} onChange={e => SetTaskTitle(e.target.value)}
          />
        ) : (
          <div className={titleStyle}>{data.title}</div>
        )}
      </div>
      <div className={style.footer}>
        {taskEdited ? (
          <>
            <button className={style.active} onClick={saveItem}>
              Сохранить
            </button>
            <button className={`${style.edit_button} ${style.active}`} onClick={undoEdit}>
              <EditIcon />
            </button>
          </>
        ) : (
          <button className={style.edit_button} onClick={editItem}>
            <EditIcon />
          </button>
        )}
        <button className={style.delete_button} onClick={removeItem}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
