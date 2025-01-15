import { createContext } from 'react';

import { TaskGroup } from '@/types/tasks-types';

interface TaskWidgetContextType {
  tasks: TaskGroup[];
  setTasks: (tasks: TaskGroup[]) => void;
  loading: boolean;
  error: Error | null;
}

// here I've created the feature related Context
export const TaskWidgetContext = createContext<TaskWidgetContextType>({
  tasks: [],
  setTasks: () => {},
  loading: false,
  error: null,
});
