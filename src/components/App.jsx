import Profile from 'components/Profile/Profile';
import user from 'user.json';

const { username, tag, location, avatar, stats } = user;

const App = () => {
	return (
		<div>
			<Profile
				username={username}
				tag={tag}
				location={location}
				avatar={avatar}
				stats={stats}
			/>
		</div>
	);
};

export default App;