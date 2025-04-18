import styled from 'styled-components';

export const Button = styled.button`
	margin: 15px 0;
	padding: ${({ $isBig }) => ($isBig ? `10px 40px` : `7px 20px`)};
	font-size: ${({ $isBig, theme: { fontSize } }) =>
		$isBig ? fontSize.m : fontSize.xs};
	background-color: ${({ theme }) => theme.colors.lightPurple};
	border-radius: 20px;
	border: none;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.darkGrey};
	cursor: pointer;
`;
