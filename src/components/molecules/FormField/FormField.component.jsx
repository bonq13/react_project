import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from '../../atoms/Label/Label.styles';
import { Input } from '../../atoms/input/Input.styles';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	${Label} {
		margin: 10px;
	}
`;

const FormField = ({
	onChange,
	value,
	checked,
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
				{...(type === 'checkbox' ? { checked } : { value })}
				onChange={onChange}
				data-testid={label}></Input>
		</Wrapper>
	);
};

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

export default FormField;
