import { useState } from 'react';

import Checkbox from '@/components/Checkbox/Checkbox';
import Accordion from '@/components/Accordion/Accordion';

import { TaskList } from './styles';

import { useTaskWidgetContext } from '@/layouts/TaskWidget/hooks/context-hooks';

import { isGroupCompleted } from '@/utils/progress-helpers';

export default function Content() {
  const { tasks, setTasks } = useTaskWidgetContext();
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  function handleCheckboxChange(selectedTaskId: string) {
    setTasks((prevTasks) =>
      prevTasks.map((taskGroup) => ({
        ...taskGroup,
        tasks: taskGroup.tasks.map((currentTask) =>
          currentTask.description === selectedTaskId // while we haven't unique keys, and assuming that descriptions are unique -> we can search tasks by description
            ? { ...currentTask, checked: !currentTask.checked }
            : currentTask
        ),
      }))
    );
  }

  return (
    <>
      {tasks.map(({ name, tasks }) => (
        <Accordion
          // while we haven't unique keys, and assuming that names are unique -> we can use name as a key
          key={name}
          title={name}
          open={expandedGroup === name}
          setOpen={setExpandedGroup}
          completed={isGroupCompleted(tasks)}
        >
          <TaskList>
            {tasks.map(({ description, checked }) => (
              <li
                // here is the same situation, we can use description as a key
                key={description}
              >
                <Checkbox
                  label={description}
                  checked={checked}
                  onChange={() => handleCheckboxChange(description)}
                />
              </li>
            ))}
          </TaskList>
        </Accordion>
      ))}
    </>
  );
}
