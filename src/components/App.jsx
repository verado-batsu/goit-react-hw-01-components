import Profile from 'components/Profile/Profile';
import user from 'data/user.json';
// !------------------------------
import Statistics from 'components/Statistics/Statistics';
import data from 'data/data.json';
// !------------------------------
import FriendList from 'components/FriendList/FriendList';
import friends from 'data/friends.json';
// !------------------------------
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

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
			<Statistics title="Upload stats" data={data} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</div>
	);
};

export default App;