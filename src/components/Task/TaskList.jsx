import { useGetTasksQuery } from 'features/tasks/tasksApi';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TaskList() {
	const { isLoading, data: tasks, isError } = useGetTasksQuery();
	const { searchText, selectedProjects } = useSelector((state) => state.filter);

	// decide what to render
	let content = null;

	// show loading spinner
	if (isLoading) {
		content = <div>Loading...</div>;
	}
	// show error message
	if (!isLoading && isError) {
		content = <div>Something went wrong! Please try again later.</div>;
	}
	// show no tasks found message
	if (tasks?.length === 0 && !isLoading && !isError) {
		content = <div>No tasks member found</div>;
	}
	// finally show the tasks list
	if (tasks?.length > 0 && !isLoading && !isError) {
		let copedTasks = [...tasks];
		// filter the tasks based on search text
		if (searchText) {
			copedTasks = copedTasks.filter((task) => {
				return task.taskName.toLowerCase().includes(searchText.toLowerCase());
			});
		}

		// filter the tasks based on selected projects
		if (selectedProjects.length > 0) {
			copedTasks = copedTasks.filter((task) => {
				return selectedProjects.includes(task.project.projectName);
			});
		}

		content = copedTasks.map((task) => <TaskItem key={task.id} task={task} />);
	}

	return <div className="lws-task-list">{content}</div>;
}
