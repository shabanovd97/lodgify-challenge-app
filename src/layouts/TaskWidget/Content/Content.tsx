import Checkbox from '@/components/Checkbox/Checkbox';

import { ContentWrapper } from './style';

import { Task, TaskGroup } from '@/types/tasks-types';
import { isGroupCompleted } from '@/utils/progress-helpers';

interface ContentProps {
  tasks: TaskGroup[];
  onChangeTask: (task: Task) => void;
}

export default function Content({ tasks, onChangeTask }: ContentProps) {
  return (
    <ContentWrapper>
      {tasks.map((taskGroup) => (
        <section key={taskGroup.name}>
          <h2>{taskGroup.name}</h2>
          <p>{`isCompleted: ${isGroupCompleted(taskGroup)}`}</p>
          <ul>
            {taskGroup.tasks.map((task) => (
              <li key={task.description}>
                <Checkbox
                  label={task.description}
                  checked={task.checked}
                  onChange={() => onChangeTask(task)}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </ContentWrapper>
  );
}
