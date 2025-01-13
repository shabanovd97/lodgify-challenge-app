import { TaskGroup } from '@/types/tasks-types';

export function calculateTasksSum(tasks: TaskGroup[], checked: boolean) {
  const tasksValuesSum = tasks.reduce((acc, taskGroup) => {
    const taskGroupValue = taskGroup.tasks.reduce((acc, task) => {
      if (checked) {
        return acc + (task.checked ? task.value : 0);
      } else {
        return acc + task.value;
      }
    }, 0);

    return acc + taskGroupValue;
  }, 0);

  return tasksValuesSum;
}

export function calculateProgress(tasks: TaskGroup[]) {
  const tasksValuesSum = calculateTasksSum(tasks, false);
  const tasksCheckedSum = calculateTasksSum(tasks, true);

  return Math.round((tasksCheckedSum * 100) / tasksValuesSum) || 0;
}
