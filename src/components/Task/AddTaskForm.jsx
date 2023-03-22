import { projectsApi } from 'features/projects/projectsApi';
import { useCreateTaskMutation } from 'features/tasks/tasksApi';
import { teamApi } from 'features/team/teamApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddTaskForm() {
	const dispatch = useDispatch();
	// Get teams and projects from the store
	const { data: teams } = useSelector(teamApi.endpoints.getTeams.select());
	const { data: projects } = useSelector(projectsApi.endpoints.getProjects.select());

	// Fetch teams and projects from the server if they are not in the store
	useEffect(() => {
		// if tasks and projects are not undefined
		if (teams === undefined) dispatch(teamApi.endpoints.getTeams.initiate());
		if (projects === undefined) dispatch(projectsApi.endpoints.getProjects.initiate());
	}, [teams, projects, dispatch]);

	// define local state for the form
	const [taskName, setTaskName] = useState('');
	const [teamMember, setTeamMember] = useState('');
	const [selectedProject, setSelectedProject] = useState('');
	const [deadline, setDeadline] = useState('');

	// create a new task action creator

	const [createTask, { isLoading, isSuccess: isCreated }] = useCreateTaskMutation();

	// form submit handler
	const handleSubmit = (e) => {
		e.preventDefault();

		const findTeamMember = teams.find((team) => parseInt(team.id) === parseInt(teamMember));
		const findProject = projects.find((project) => parseInt(project.id) === parseInt(selectedProject));
		// create a new task object
		const newTask = {
			taskName,
			teamMember: findTeamMember,
			project: findProject,
			deadline,
			status: 'inProgress'
		};

		console.log(newTask);

		// dispatch the addTask action
		createTask(newTask);
	};

	// if the task is created, reset the form
	useEffect(() => {
		if (isCreated) {
			setTaskName('');
			setTeamMember('');
			setSelectedProject('');
			setDeadline('');
		}
	}, [isCreated]);

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			<div className="fieldContainer">
				<label htmlFor="lws-taskName">Task Name</label>
				<input
					type="text"
					name="taskName"
					id="lws-taskName"
					required
					placeholder="Implement RTK Query"
					onChange={(e) => setTaskName(e.target.value)}
				/>
			</div>

			<div className="fieldContainer">
				<label>Assign To</label>
				<select
					name="teamMember"
					id="lws-teamMember"
					required
					onChange={(e) => setTeamMember(e.target.value)}
					value={teamMember}>
					<option value="" hidden>
						Select Job
					</option>

					{teams?.map((team) => (
						<option key={team.id} value={team.id}>
							{team.name}
						</option>
					))}
				</select>
			</div>
			<div className="fieldContainer">
				<label htmlFor="lws-projectName">Project Name</label>
				<select
					id="lws-projectName"
					name="projectName"
					required
					onChange={(e) => setSelectedProject(e.target.value)}
					value={selectedProject}>
					<option value="" hidden>
						Select Project
					</option>
					{projects?.map((project) => (
						<option key={project.id} value={project.id}>
							{project.projectName}
						</option>
					))}
				</select>
			</div>

			<div className="fieldContainer">
				<label htmlFor="lws-deadline">Deadline</label>
				<input
					type="date"
					name="deadline"
					id="lws-deadline"
					required
					onChange={(e) => setDeadline(e.target.value)}
				/>
			</div>

			<div className="text-right">
				<button type="submit" className="lws-submit" disabled={isLoading}>
					Save
				</button>
			</div>
		</form>
	);
}
