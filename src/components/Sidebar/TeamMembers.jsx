import { useGetTeamsQuery } from 'features/team/teamApi';

export default function TeamMembers() {
	const { isLoading, data: teams, isError, error } = useGetTeamsQuery();

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
	// show no team found message
	if (teams?.length === 0 && !isLoading && !isError) {
		content = <div>No team member found</div>;
	}
	// finally show the team list
	if (teams?.length > 0 && !isLoading && !isError) {
		content = teams.map((team) => (
			<div key={team.id} className="checkbox-container">
				<img src={team.avatar} className="team-avater" alt={team.name} />
				<p className="label">{team.name}</p>
			</div>
		));
	}

	return (
		<div className="mt-8">
			<h3 className="text-xl font-bold">Team Members</h3>
			<div className="mt-3 space-y-4">{content}</div>
		</div>
	);
}
