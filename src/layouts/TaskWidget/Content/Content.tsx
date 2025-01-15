import Checkbox from '@/components/Checkbox/Checkbox';

import { ContentWrapper } from './style';

import { Task, TaskGroup } from '@/types/tasks-types';
import { isGroupCompleted } from '@/utils/progress-helpers';
import Accordion from '@/components/Accordion/Accordion';

interface ContentProps {
  tasks: TaskGroup[];
  onChangeTask: (task: Task) => void;
}

export default function Content({ tasks, onChangeTask }: ContentProps) {
  return (
    <ContentWrapper>
      {tasks.map((taskGroup) => (
        <Accordion
          key={taskGroup.name}
          title={taskGroup.name}
          completed={isGroupCompleted(taskGroup)}
        >
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
        </Accordion>
      ))}
    </ContentWrapper>
  );
}
