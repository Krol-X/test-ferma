import style from './TaskItem.module.css';

import Card from '@/components/_shared/Card';
import CheckBox from './CheckBox';
import EditIcon from '@/assets/edit-icon.svg?react'
import TrashIcon from '@/assets/trash-icon.svg?react'

export const TaskItem = ({ data }) => {
  const titleStyle = style.title + (data.done? ` ${style.title_done}`: '')

  return (
    <div className={style.task_item}>
      <Card column={true} gap='1.25rem'>
        <div className={style.header}>
          <div className={style.date}>{ data.date }</div>
        </div>
        <div className={style.body}>
          <div><CheckBox checked={data.done} /></div>
          <div className={titleStyle}>{ data.title }</div>
        </div>
        <div className={style.footer}>
          <button className={style.edit_button}><EditIcon /></button>
          <button className={style.delete_button}><TrashIcon /></button>
        </div>
      </Card>
    </div>
  );
};
