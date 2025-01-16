import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '@/stores';

export default () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.items);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(actions.tasks.fetch(filter));
  }, [filter]);

  return { tasks, filter };
}
