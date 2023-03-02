import PropTypes from 'prop-types';
import { FriendListCards, FriendItem, FriendStatus, FriendAvatar,FriendName } from 'components/FriendList/FriendList.styled';

function FriendList({ friends }) {
	return (
		<FriendListCards>
			{friends.map(({ avatar, id, isOnline, name}) => {
				return (
					<FriendItem key={id}>
						<FriendStatus stats={isOnline}></FriendStatus>
						<FriendAvatar src={avatar} alt="User avatar" width="48" />
						<FriendName>{name}</FriendName>
					</FriendItem>
				);
			})}
		</FriendListCards>
	);
}

export default FriendList;

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({
		avatar: PropTypes.string,
		id: PropTypes.number,
		isOnline: PropTypes.bool,
		name: PropTypes.string,
	}))
}