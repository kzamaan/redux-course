import avatarImage3 from 'assets/images/avatars/akash.png';
import avatarImage7 from 'assets/images/avatars/almas.png';
import avatarImage6 from 'assets/images/avatars/ferdous.png';
import avatarImage5 from 'assets/images/avatars/riyadh.png';
import avatarImage2 from 'assets/images/avatars/sadh.png';
import avatarImage4 from 'assets/images/avatars/salahuddin.png';
import avatarImage1 from 'assets/images/avatars/sumit.png';

export default function TeamMembers() {
	return (
		<div className="mt-8">
			<h3 className="text-xl font-bold">Team Members</h3>
			<div className="mt-3 space-y-4">
				<div className="checkbox-container">
					<img src={avatarImage1} className="team-avater" alt="photo0" />
					<p className="label">Sumit Saha</p>
				</div>

				<div className="checkbox-container">
					<img src={avatarImage2} className="team-avater" alt="photo1" />
					<p className="label">Sadh Hasan</p>
				</div>

				<div className="checkbox-container">
					<img src={avatarImage3} className="team-avater" alt="photo2" />
					<p className="label">Akash Ahmed</p>
				</div>

				<div className="checkbox-container">
					<img src={avatarImage4} className="team-avater" alt="photo3" />
					<p className="label">Md Salahuddin</p>
				</div>

				<div className="checkbox-container">
					<img src={avatarImage5} className="team-avater" alt="photo4" />
					<p className="label">Riyadh Hassan</p>
				</div>

				<div className="checkbox-container">
					<img src={avatarImage6} className="team-avater" alt="photo5" />
					<p className="label">Ferdous Hassan</p>
				</div>

				<div className="checkbox-container">
					<img src={avatarImage7} className="team-avater" alt="photo6" />
					<p className="label">Arif Almas</p>
				</div>
			</div>
		</div>
	);
}
