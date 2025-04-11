import React from 'react';
import { users } from '../../../data/users.js';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.component.jsx';
import { Wrapper, StyledList } from './UsersList.styles.jsx';
// rscp !!!!

const UsersList = () => {
	return (
		<Wrapper>
			<StyledList>
				{users.map((userData, i) => (
					<UsersListItem index={i} userData={userData} key={userData.name} />
				))}
			</StyledList>
		</Wrapper>
	);
}; 

export default UsersList;
