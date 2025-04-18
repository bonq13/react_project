import styled from 'styled-components';

export const Input = styled.input`
	padding: 5px 8px;
	border: 1px solid ${({ theme }) => theme.colors.darkPurple};
	box-sizing: border-box;
	box-shadow: -2px 4px 19px rgba(115, 124, 142, 0.09);
	border-radius: 25px;
	width: 100%;

	&[type='checkbox'] {
		width: auto; /* Checkbox ma naturalną szerokość */
		margin-left: 10px; /* Dopasuj do marginesu etykiety */
	}

	&:focus {
		outline: none;
		box-shadow: -2px 4px 19px rgba(115, 124, 142, 0.3);
	}
`;
