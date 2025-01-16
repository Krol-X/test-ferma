import style from './TaskItem.module.css';

import Card from '@/components/_shared/Card';
import CheckBox from './CheckBox';
import EditIcon from '@/assets/edit-icon.svg?react'
import TrashIcon from '@/assets/trash-icon.svg?react'

import { useDispatch } from 'react-redux';
import { actions } from '@/stores'

export const TaskItem = ({ data }) => {
  const titleStyle = style.title + (data.done ? ` ${style.title_done}` : '')

  const dispatch = useDispatch();

  function removeItem() {
    dispatch(actions.tasks.remove(data.id))
  }

  return (
    <div className={style.task_item}>
      <Card column={true} gap='1.25rem'>
        <div className={style.header}>
          <div className={style.date}>{data.date}</div>
        </div>
        <div className={style.body}>
          <CheckBox checked={data.done} />
          {data?._edited ? (
            // value={data.title}
            <input className={style.title_edit} type='text' />
          ) : (
            <div className={titleStyle}>{data.title}</div>
          )}
        </div>
        <div className={style.footer}>
          {data?._edited ? (
            <>
              <button className={style.edit_active}>Сохранить</button>
              <button className={`${style.edit_button} ${style.edit_active}`}>
                <EditIcon />
              </button>
            </>
          ) : (
            <button className={style.edit_button}>
              <EditIcon />
            </button>
          )}
          <button className={style.delete_button} onClick={removeItem}>
            <TrashIcon />
          </button>
        </div>
      </Card>
    </div>
  );
};
