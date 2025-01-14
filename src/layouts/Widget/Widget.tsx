import { useEffect, useMemo, useState } from 'react';

import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Checkbox from '@/components/Checkbox/Checkbox';

import { calculateProgress } from '@/utils/progress-helpers';
import { GET_TASK_GROUPS_URL } from '@/constants';
import { Task, TaskGroup } from '@/types/tasks-types';

export default function Widget() {
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
    <section>
      <header>
        <h1>Lodgify Grouped Tasks</h1>
        <ProgressBar progress={progress} />
      </header>
      <main>
        {tasks.map((taskGroup) => (
          <section key={taskGroup.name}>
            <h2>{taskGroup.name}</h2>
            <ul>
              {taskGroup.tasks.map((task) => (
                <li key={task.description}>
                  <Checkbox
                    label={task.description}
                    checked={task.checked}
                    onChange={() => handelCheckboxChange(task)}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </section>
  );
}
