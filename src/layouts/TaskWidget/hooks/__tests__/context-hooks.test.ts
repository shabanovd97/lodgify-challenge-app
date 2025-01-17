import React from 'react';

import { TaskWidgetContext } from '@/layouts/TaskWidget/context/TaskWidgetContext';

import { useTaskWidgetContext } from '../context-hooks';

describe('useTaskWidgetContext', () => {
  it('should return the correct context when TaskWidgetContext is provided', () => {
    const mockContext = {
      taskGroups: [],
      setTaskGroups: jest.fn(),
      isLoading: false,
      setIsLoading: jest.fn(),
    };

    jest.spyOn(React, 'useContext').mockImplementation(() => mockContext);

    const result = useTaskWidgetContext();

    expect(result).toEqual(mockContext);
    expect(React.useContext).toHaveBeenCalledWith(TaskWidgetContext);
  });
});
