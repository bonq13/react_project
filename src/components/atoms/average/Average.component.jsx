import React from 'react';
import styled from 'styled-components';

const green = ({ theme }) => theme.colors.success;
const red = ({ theme }) => theme.colors.error;
const yellow = ({ theme }) => theme.colors.warning;

const Average = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.colors.white};
	background-color: ${(props) => {
		const avg = parseFloat(props.value);
		if (avg > 4) return green;
		if (avg >= 3 && avg <= 4) return yellow;
		return red;
	}};
`;

export default Average;
