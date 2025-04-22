import styled from 'styled-components';

export const Wrapper = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;

	&:not(:last-child)::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: lightgrey;
	}
`;

export const StyledInfo = styled.div`
	padding: 25px 20px;

	p {
		margin: 0;
		color: ${({ theme }) => theme.colors.darkGrey};
	}

	p:first-child {
		display: flex;
		align-items: center;
		font-size: ${({ theme }) => theme.fontSize.l};
		font-weight: 700;
	}

	p:last-child {
		font-size: ${({ theme }) => theme.fontSize.m};
		font-weight: 200;
	}
`;