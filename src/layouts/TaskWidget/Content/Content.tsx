import Checkbox from '@/components/Checkbox/Checkbox';
import Accordion from '@/components/Accordion/Accordion';

import { TaskList } from './styles';

import { useTaskWidgetContext } from '@/layouts/TaskWidget/hooks/context-hooks';

import { Task } from '@/types/tasks-types';
import { isGroupCompleted } from '@/utils/progress-helpers';

export default function Content() {
  const { tasks, setTasks } = useTaskWidgetContext();

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

  return (
    <>
      {tasks.map((taskGroup) => (
        <Accordion
          key={taskGroup.name} // while we haven't unique keys, and assuming that names are unique -> we can use name as a key
          title={taskGroup.name}
          completed={isGroupCompleted(taskGroup)}
        >
          <TaskList>
            {taskGroup.tasks.map((task) => (
              <li
                key={task.description} // here is the same situation, we can use description as a key
              >
                <Checkbox
                  label={task.description}
                  checked={task.checked}
                  onChange={() => handelCheckboxChange(task)}
                />
              </li>
            ))}
          </TaskList>
        </Accordion>
      ))}
    </>
  );
}
