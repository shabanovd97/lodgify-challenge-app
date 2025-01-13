import { GET_TASK_GROUPS_URL } from '@/constants';

export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface TaskGroup {
  name: string;
  tasks: Task[];
}

export async function fetchTaskGroups(
  setTasks: React.Dispatch<React.SetStateAction<TaskGroup[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<Error | null>>
) {
  try {
    setLoading(true);

    const response = await fetch(GET_TASK_GROUPS_URL);
    const data = await response.json();

    setTasks(data);
  } catch (error) {
    setError(new Error('An error occurred while fetching the tasks'));
    console.error(error);
  } finally {
    setLoading(false);
  }
}
