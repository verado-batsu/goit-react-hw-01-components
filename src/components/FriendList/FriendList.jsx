import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';

function FriendList({ friends }) {
	return (
		<ul className={css.friendList}>
			{friends.map(({ avatar, id, isOnline, name}) => {
				return (
					<li key={id} className={css.item}>
						<span className={css[isOnline] + ' ' + css.status}></span>
						<img className={css.avatar} src={avatar} alt="User avatar" width="48" />
						<p className={css.name}>{name}</p>
					</li>
				);
			})}
		</ul>
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