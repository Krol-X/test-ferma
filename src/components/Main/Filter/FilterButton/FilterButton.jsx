import style from './FilterButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '@/stores';
import { FilterEnum } from '@/stores/filter'
import useTasks from '@/hooks/useTasks';

export const FilterButton = ({ children, filter }) => {
  const current_filter = useSelector(state => state.filter);
  const is_active = filter === current_filter
  const filterClass = `${style.filter_button} ${style[filter]}` + (is_active? ` ${style.active}`: '')
  const dispatch = useDispatch();

  const changeFilter = () => {
    dispatch(actions.filter.change(filter))
  }

  if (FilterEnum.has(filter)) {
    return (
      <button className={filterClass}
        onClick={changeFilter}
      >
        {children}
      </button>
    )
  }
};
