import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Average from '../../atoms/average/Average.component';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton.component';
import { StyledInfo, Wrapper } from './UsersListItem.styles';
import { UsersContext } from '../../../providers/UsersProvider';

const UsersListItem = ({
	userData: { average, name, attendance },
}) => {
	const { deleteUser } = useContext(UsersContext);

	return (
		<Wrapper>
			<Average value={average}>{average}</Average>
			<StyledInfo>
				<p>
					{name}
					<DeleteButton onClick={() => deleteUser(name)} />
				</p>
				<p>attendance: {attendance}%</p>
			</StyledInfo>
		</Wrapper>
	);
};

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		average: PropTypes.string,
		name: PropTypes.string.isRequired,
		attendance: PropTypes.string,
	}),
};

export default UsersListItem;
