import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actions} from '@/stores';

export const useTasks = (
  () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state?.tasks.items);

    useEffect(() => {
      dispatch(actions.tasks.fetchTasks());
    }, []);

    return tasks;
  }
);
