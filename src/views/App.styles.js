import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;
