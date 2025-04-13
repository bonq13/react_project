import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from '../../atoms/Label/Label.styles';
import { Input } from '../../atoms/input/Input.styles';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-content: flex-start;

	${Label} {
		margin: 10px;
	}
`;

const FormField = ({
	onChange,
	value,
	label,
	name,
	id,
	type = 'text',
	...props
}) => {
	return (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<Input
				name={name}
				id={id}
				type={type}
				value={value}
				onChange={onChange}></Input>
		</Wrapper>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default FormField;
