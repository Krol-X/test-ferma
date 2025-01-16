import style from './CheckBox.module.css';

import DoneIcon from '@/assets/done-icon.svg?react'
import UndoneIcon from '@/assets/undone-icon.svg?react'

export const CheckBox = ({ checked, onClick }) => {
  return checked ? (
    <DoneIcon className={style.checked} onClick={onClick} />
  ) : (
    <UndoneIcon className={style.unchecked} onClick={onClick} />
  )
};
