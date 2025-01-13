import { useEffect, useMemo, useState } from 'react';

import { fetchTaskGroups, TaskGroup } from '@/api/tasks';
import { calculateProgress } from '@/utils/progress-helpers';

export default function Widget() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<TaskGroup[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchTaskGroups(setTasks, setLoading, setError);
  }, []);

  const progress = useMemo(() => calculateProgress(tasks), [tasks]);

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
        <div>{`Progress bar - completed ${progress}%`}</div>
      </header>
      <main>
        {tasks.map((taskGroup) => (
          <section key={taskGroup.name}>
            <h2>{taskGroup.name}</h2>
            <ul>
              {taskGroup.tasks.map((task) => (
                <li key={task.description}>
                  <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => {}}
                  />
                  <label>{task.description}</label>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </section>
  );
}
