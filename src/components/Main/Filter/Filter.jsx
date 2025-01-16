import style from './Filter.module.css';
import FilterButton from './FilterButton';

import { FilterEnum } from '@/stores/filter'

export const Filter = () => {
  return (
    <div className={style.filter}>
      <FilterButton filter={FilterEnum.filter_none}>
        Все
      </FilterButton>
      <FilterButton filter={FilterEnum.filter_done}>
        Выполнено
      </FilterButton>
      <FilterButton filter={FilterEnum.filter_undone}>
        Не выполнено
      </FilterButton>
    </div>
  );
};
