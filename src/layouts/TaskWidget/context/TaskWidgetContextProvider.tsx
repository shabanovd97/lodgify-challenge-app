import { ReactNode, useCallback, useEffect, useState } from 'react';

import { TaskWidgetContext } from './TaskWidgetContext';

import { GET_TASK_GROUPS_URL } from '@/constants';
import { TaskGroup } from '@/types/tasks-types';

// here I've created a Context Provider to fetch tasks and store them in the Context, this approach allow us separate the data fetching and feature related state management logic from the components
export default function TaskWidgetContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskGroup[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(GET_TASK_GROUPS_URL);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      // artificial delay to emulate real api call *NONE PRODUCTION CODE*
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setTasks(data);
    } catch (error) {
      setError(
        new Error(
          'An error occurred while fetching the tasks. Please try again later.'
        )
      );
      console.error('Error fetching tasks: ', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <TaskWidgetContext.Provider value={{ tasks, setTasks, loading, error }}>
      {children}
    </TaskWidgetContext.Provider>
  );
}
