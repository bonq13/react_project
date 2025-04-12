import React, { useState, useEffect } from 'react';
import { users as usersData } from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.component.jsx';
import { Wrapper, StyledList } from './UsersList.styles.jsx';
// rscp !!!!

const mockAPI = (success) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (usersData) {
				resolve([...usersData]);
			} else {
				reject({ message: 'Error' });
			}
		}, 2000);
	});
};

const UsersList = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setLoadingState] = useState([]);

	useEffect(() => {
		setLoadingState(true);
		mockAPI()
			.then((data) => {
				setLoadingState(false);
				setUsers(data);
			})
			.catch((err) => console.log(err));
	}, []);

	const deleteUser = (name) => {
		const filteredUsers = users.filter((user) => user.name !== name);

		setUsers(filteredUsers);
	};

	return (
		<Wrapper>
			<h1> {isLoading ? `Loading...` : `Users list`}</h1>
			<StyledList>
				{users.map((userData) => (
					<UsersListItem
						deleteUser={deleteUser}
						userData={userData}
						key={userData.name}
					/>
				))}
			</StyledList>
		</Wrapper>
	);
};

export default UsersList;
// class UsersList extends React.Component {
// 	state = {
// 		users,
// 	};

// 	componentDidMount() {}

// 	componentDidUpdate() {}

// 	componentWillUnmount() {}

// 	deleteUser = (name) => {
// 		const filteredUsers = this.state.users.filter((user) => user.name !== name);

// 		this.setState({ users: filteredUsers });
// 	};

// 	render() {
// 		return (
// 			<Wrapper>
// 				<StyledList>
// 					{this.state.users.map((userData, i) => (
// 						<UsersListItem
// 							deleteUser={this.deleteUser}
// 							index={i}
// 							userData={userData}
// 							key={userData.name}
// 						/>
// 					))}
// 				</StyledList>
// 			</Wrapper>
// 		);
// 	}
// }
