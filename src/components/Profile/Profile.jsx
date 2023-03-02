import PropTypes from 'prop-types';
import { ProfileCard, ProfileDescription, ProfileImg, ProfileName, ProfileTag, ProfileLocation, ProfileStats, StatsItem, StatsLabel, StatsQuantity } from 'components/Profile/Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
	return (
		<ProfileCard>
			<ProfileDescription>
				<ProfileImg
					src={avatar}
					alt="User avatar"
					width="200"
				/>
				<ProfileName>{username}</ProfileName>
				<ProfileTag>{tag}</ProfileTag>
				<ProfileLocation>{location}</ProfileLocation>
			</ProfileDescription>
			
			<ProfileStats>
				<StatsItem>
					<StatsLabel>Followers</StatsLabel>
					<StatsQuantity>{stats.followers}</StatsQuantity>
				</StatsItem>
				<StatsItem>
					<StatsLabel>Views</StatsLabel>
					<StatsQuantity>{stats.views}</StatsQuantity>
				</StatsItem>
				<StatsItem>
					<StatsLabel>Likes</StatsLabel>
					<StatsQuantity>{stats.likes}</StatsQuantity>
				</StatsItem>
			</ProfileStats>
		</ProfileCard>
	);
}

export default Profile;

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.objectOf(PropTypes.number.isRequired),
}