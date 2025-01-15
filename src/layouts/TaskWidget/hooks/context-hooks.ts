import { useContext } from 'react';

import { TaskWidgetContext } from '@/layouts/TaskWidget/context/TaskWidgetContext';

// here I've added a Custom Hook to access Context more conveniently
export function useTaskWidgetContext() {
  return useContext(TaskWidgetContext);
}
