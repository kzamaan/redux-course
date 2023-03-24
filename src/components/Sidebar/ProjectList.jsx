import { updateSelectedProjects } from 'features/filter/filterSlice';
import { useGetProjectsQuery } from 'features/projects/projectsApi';
import { useDispatch } from 'react-redux';

export default function ProjectList() {
	const { isLoading, data: projectsList, isError } = useGetProjectsQuery();
	const dispatch = useDispatch();

	const toggleProjectHandler = ({ projectName }) => {
		dispatch(updateSelectedProjects(projectName));
	};

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
	// show no projects found message
	if (projectsList?.length === 0 && !isLoading && !isError) {
		content = <div>No projects found</div>;
	}
	// finally show the projects list
	if (projectsList?.length > 0 && !isLoading && !isError) {
		content = projectsList.map((project) => (
			<div key={project.id} className="checkbox-container">
				<input type="checkbox" className={project.colorClass} onChange={() => toggleProjectHandler(project)} />
				<p className="label">{project.projectName}</p>
			</div>
		));
	}
	return (
		<div>
			<h3 className="text-xl font-bold">Projects</h3>
			<div className="mt-3 space-y-4">{content}</div>
		</div>
	);
}
