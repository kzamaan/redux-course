import EditTaskForm from 'components/Task/EditTaskForm';
import { useGetTaskQuery } from 'features/tasks/tasksApi';
import { useParams } from 'react-router-dom';

export default function EditTask() {
	const { taskId } = useParams();

	const { data: task, isLoading, isError } = useGetTaskQuery(taskId);

	// decide what to render
	let content = null;

	if (isLoading) {
		content = <div>Loading...</div>;
	}

	// if there is an error
	if (isError && !isLoading) {
		content = <div>There was an error fetching the task</div>;
	}

	if (!task?.id && !isLoading) {
		content = <div>Task not found</div>;
	}

	if (task?.id && !isLoading) {
		content = <EditTaskForm task={task} />;
	}

	return (
		<div className="container relative">
			<main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
				<h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">Update Task for Your Team</h1>

				<div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">{content}</div>
			</main>
		</div>
	);
}
