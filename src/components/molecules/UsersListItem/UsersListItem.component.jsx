import React from 'react';
import PropTypes from 'prop-types';
import Average from '../../atoms/average/Average.component';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton.component';
import { StyledInfo, Wrapper } from './UsersListItem.styles';

const showIndex = (index) => {
	alert(`This is student #${index + 1}`);
};

const UsersListItem = ({ index, userData: { average, name, attendance } }) => {
	return (
		<Wrapper>
			<Average value={average}>{average}</Average>
			<StyledInfo>
				<p>{name}
				<DeleteButton onClick={() => showIndex(index)} />
				</p>
				<p>attendance: {attendance}</p>
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
