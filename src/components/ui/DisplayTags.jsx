export default function DisplayTags({ tags }) {
	return <>{tags?.map((tag) => <span key={tag}>#{tag},</span>) || ''}</>;
}
