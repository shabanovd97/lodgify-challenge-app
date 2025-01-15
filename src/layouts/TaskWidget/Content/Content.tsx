import Checkbox from '@/components/Checkbox/Checkbox';
import Accordion from '@/components/Accordion/Accordion';

import { TasksList } from './style';

import { Task, TaskGroup } from '@/types/tasks-types';
import { isGroupCompleted } from '@/utils/progress-helpers';

interface ContentProps {
  tasks: TaskGroup[];
  onChangeTask: (task: Task) => void;
}

export default function Content({ tasks, onChangeTask }: ContentProps) {
  return (
    <>
      {tasks.map((taskGroup) => (
        <Accordion
          key={taskGroup.name} // while we haven't unique keys, and assuming that names are unique -> we can use name as a key
          title={taskGroup.name}
          completed={isGroupCompleted(taskGroup)}
        >
          <TasksList>
            {taskGroup.tasks.map((task) => (
              <li
                key={task.description} // here is the same situation, we can use description as a key
              >
                <Checkbox
                  label={task.description}
                  checked={task.checked}
                  onChange={() => onChangeTask(task)}
                />
              </li>
            ))}
          </TasksList>
        </Accordion>
      ))}
    </>
  );
}
