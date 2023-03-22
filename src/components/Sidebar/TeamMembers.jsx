import avatarImage3 from 'assets/images/avatars/akash.png';
import avatarImage7 from 'assets/images/avatars/almas.png';
import avatarImage6 from 'assets/images/avatars/ferdous.png';
import avatarImage5 from 'assets/images/avatars/riyadh.png';
import avatarImage2 from 'assets/images/avatars/sadh.png';
import avatarImage4 from 'assets/images/avatars/salahuddin.png';
import avatarImage1 from 'assets/images/avatars/sumit.png';

export default function TeamMembers() {
	return (
		<div class="mt-8">
			<h3 class="text-xl font-bold">Team Members</h3>
			<div class="mt-3 space-y-4">
				<div class="checkbox-container">
					<img src={avatarImage1} class="team-avater" alt="photo0" />
					<p class="label">Sumit Saha</p>
				</div>

				<div class="checkbox-container">
					<img src={avatarImage2} class="team-avater" alt="photo1" />
					<p class="label">Sadh Hasan</p>
				</div>

				<div class="checkbox-container">
					<img src={avatarImage3} class="team-avater" alt="photo2" />
					<p class="label">Akash Ahmed</p>
				</div>

				<div class="checkbox-container">
					<img src={avatarImage4} class="team-avater" alt="photo3" />
					<p class="label">Md Salahuddin</p>
				</div>

				<div class="checkbox-container">
					<img src={avatarImage5} class="team-avater" alt="photo4" />
					<p class="label">Riyadh Hassan</p>
				</div>

				<div class="checkbox-container">
					<img src={avatarImage6} class="team-avater" alt="photo5" />
					<p class="label">Ferdous Hassan</p>
				</div>

				<div class="checkbox-container">
					<img src={avatarImage7} class="team-avater" alt="photo6" />
					<p class="label">Arif Almas</p>
				</div>
			</div>
		</div>
	);
}
