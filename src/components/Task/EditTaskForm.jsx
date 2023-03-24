import { projectsApi } from 'features/projects/projectsApi';
import { useUpdateTaskMutation } from 'features/tasks/tasksApi';
import { teamApi } from 'features/team/teamApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function EditTaskForm({ task }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// Get teams and projects from the store
	const { data: teams } = useSelector(teamApi.endpoints.getTeams.select());
	const { data: projects } = useSelector(projectsApi.endpoints.getProjects.select());

	// Fetch teams and projects from the server if they are not in the store
	useEffect(() => {
		// if tasks and projects are not undefined
		if (teams === undefined) dispatch(teamApi.endpoints.getTeams.initiate());
		if (projects === undefined) dispatch(projectsApi.endpoints.getProjects.initiate());
	}, [teams, projects, dispatch]);

	const {
		taskName: initialTaskName,
		teamMember: initialTeamMember,
		project: initialProject,
		deadline: initialDeadline
	} = task || {};

	// define local state for the form
	const [taskName, setTaskName] = useState(initialTaskName);
	const [teamMember, setTeamMember] = useState(initialTeamMember?.id);
	const [selectedProject, setSelectedProject] = useState(initialProject?.id);
	const [deadline, setDeadline] = useState(initialDeadline);

	// create a new task action creator

	const [updateTask, { isLoading }] = useUpdateTaskMutation();

	// form submit handler
	const handleSubmit = async (e) => {
		e.preventDefault();

		const findTeamMember = teams.find((team) => parseInt(team.id) === parseInt(teamMember));
		const findProject = projects.find((project) => parseInt(project.id) === parseInt(selectedProject));
		// create a new task object
		const updatedTask = {
			taskName,
			teamMember: findTeamMember,
			project: findProject,
			deadline
		};

		// dispatch the addTask action
		try {
			await updateTask({
				taskId: task.id,
				data: updatedTask
			}).unwrap();

			setTaskName('');
			setTeamMember('');
			setSelectedProject('');
			setDeadline('');
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

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
					value={taskName}
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
					value={deadline}
				/>
			</div>

			<div className="text-right">
				<button type="submit" className="lws-submit" disabled={isLoading}>
					Update
				</button>
			</div>
		</form>
	);
}
