import {
  calculateTasksSum,
  calculateProgress,
  isGroupCompleted,
} from '../progress-helpers';

import { TaskGroup } from '@/types/tasks-types';

describe('Progress Helpers', () => {
  const mockTaskGroups: TaskGroup[] = [
    {
      name: 'Group 1',
      tasks: [
        { description: 'Task 1', value: 10, checked: true },
        { description: 'Task 2', value: 20, checked: false },
      ],
    },
    {
      name: 'Group 2',
      tasks: [
        { description: 'Task 3', value: 15, checked: true },
        { description: 'Task 4', value: 25, checked: true },
      ],
    },
  ];

  it('should calculate the sum of only checked task values when checked is true', () => {
    const result = calculateTasksSum(mockTaskGroups, true);
    expect(result).toBe(50);
  });

  it('should calculate the sum of all task values when checked is false', () => {
    const result = calculateTasksSum(mockTaskGroups, false);
    expect(result).toBe(70); // 10 + 20 + 15 + 25
  });

  it('should calculate progress as 100% when all tasks are checked', () => {
    const allCheckedTaskGroups: TaskGroup[] = [
      {
        name: 'Group 1',
        tasks: [
          { description: 'Task 1', value: 10, checked: true },
          { description: 'Task 2', value: 20, checked: true },
        ],
      },
      {
        name: 'Group 2',
        tasks: [
          { description: 'Task 3', value: 15, checked: true },
          { description: 'Task 4', value: 25, checked: true },
        ],
      },
    ];

    const result = calculateProgress(allCheckedTaskGroups);
    expect(result).toBe(100);
  });

  it('should return true for isGroupCompleted when all tasks in a group are checked', () => {
    const completedTasks = [
      { description: 'Task 1', value: 10, checked: true },
      { description: 'Task 2', value: 20, checked: true },
      { description: 'Task 3', value: 15, checked: true },
    ];

    const result = isGroupCompleted(completedTasks);
    expect(result).toBe(true);
  });
});
