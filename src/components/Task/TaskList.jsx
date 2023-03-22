import { useGetTasksQuery } from 'features/tasks/tasksApi';
import TaskItem from './TaskItem';

export default function TaskList() {
	const { isLoading, data: tasks, isError, error } = useGetTasksQuery();

	// decide what to render
	let content = null;

	// show loading spinner
	if (isLoading) {
		content = <div>Loading...</div>;
	}
	// show error message
	if (!isLoading && isError) {
		content = <div>{error}</div>;
	}
	// show no tasks found message
	if (tasks?.length === 0 && !isLoading && !isError) {
		content = <div>No tasks member found</div>;
	}
	// finally show the tasks list
	if (tasks?.length > 0 && !isLoading && !isError) {
		content = tasks.map((task) => <TaskItem key={task.id} task={task} />);
	}

	return <div className="lws-task-list">{content}</div>;
}
