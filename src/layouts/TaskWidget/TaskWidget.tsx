import { useEffect, useMemo, useState } from 'react';

// import Accordion from '@/components/Accordion/Accordion';
import Header from './Header/Header';
import Content from './Content/Content';

import { Layout } from './styles';

import { calculateProgress } from '@/utils/progress-helpers';
import { GET_TASK_GROUPS_URL } from '@/constants';
import { Task, TaskGroup } from '@/types/tasks-types';

export default function TaskWidget() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskGroup[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchTasks() {
      setLoading(true);

      try {
        const response = await fetch(GET_TASK_GROUPS_URL);
        const data = await response.json();

        setTasks(data);
      } catch (error) {
        setError(
          new Error(
            'An error occurred while fetching the tasks. Please try again later.'
          )
        );
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  const progress = useMemo(() => calculateProgress(tasks), [tasks]);

  function handelCheckboxChange(selectedTask: Task) {
    const updatedTaskGroups = tasks.map((taskGroup) => {
      const updatedTasks = taskGroup.tasks.map((currentTask) => {
        // while we haven't unique keys, and assuming that descriptions are unique -> we can search tasks by description
        if (currentTask.description === selectedTask.description) {
          return {
            ...currentTask,
            checked: !currentTask.checked,
          };
        }

        return currentTask;
      });

      return {
        ...taskGroup,
        tasks: updatedTasks,
      };
    });

    setTasks(updatedTaskGroups);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Layout>
      <Header progress={progress} />
      <Content tasks={tasks} onChangeTask={handelCheckboxChange} />
    </Layout>
  );
}
