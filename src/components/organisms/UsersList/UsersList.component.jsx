import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem.component';
import { StyledList } from './UsersList.styles';
import { UserShape } from '../../../types/Types';
import { Title } from '../../atoms/Title/Title.styles';

const UsersList = ({ users, deleteUser }) => {
	return (
		<>
			<Title>Students list</Title>
			<StyledList>
				{users.map((userData) => (
					<UsersListItem
						key={userData.name}
						userData={userData}
					/>
				))}
			</StyledList>
		</>
	);
};

UsersList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
	deleteUser: PropTypes.func,
};

export default UsersList;
