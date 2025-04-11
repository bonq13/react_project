import styled from 'styled-components';


export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 10px;
	width: 25px;
	height: 25px;
	background-color: ${({ theme }) => theme.colors.grey};
	border-radius: 50%;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;

	svg {
		width: 100%;
		height: 100%;
	}
`;
