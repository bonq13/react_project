import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
	justify-content: flex-start;
	padding: 30px 0;
	grid-row: 1 / 3;
	grid-column: 1 / 1;
`;

export const Logo = styled.div`
	background-color: ${({ theme }) => theme.colors.darkGrey};
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 30px;

	h1 {
		font-size: 15px;
		color: ${({ theme }) => theme.colors.white};
		text-align: right;
		margin-right: 20px;
	}
`;

export const StyledLink = styled(NavLink)`
	text-decoration: none;
	font-weight: bold;
	text-align: right;
	margin: 15px 20px 15px auto;
	font-size: ${({ theme }) => {
		theme.fontSize.m;
	}};
	color: ${({ theme }) => theme.colors.darkGrey};
	position: relative;

	&.active {
		&::after {
			opacity: 1;
		}
	}
	&::after {
		content: '';
		position: absolute;
		width: 15px;
		height: 3px;
		top: 50%;
		right: -19px;
		background-color: ${({ theme }) => theme.colors.darkPurple};
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
`;
