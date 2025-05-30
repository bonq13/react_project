import styled from 'styled-components';
import { ViewWrapper } from '../../molecules/VievWrapper/VievWrapper.styles';

export const Wrapper = styled.div`
	grid-row: 1 / 3;
	grid-column: 3 / 3;
	border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px;
	overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h3`
	margin-right: auto;
	color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
	margin: 30px 0;
	width: 100%;
	max-width: unset;
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.darkGrey};

	p {
		line-height: 1.6;
	}
`;

export const TitleWrapper = styled.div`
	h3 {
		font-size: ${({ theme }) => theme.fontSize.xl};
		margin: 0;
	}

	p {
		margin: 0;
		padding: 0;
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;

export const ContentWrapper = styled.div`
	display: flex;

	p {
		font-size: ${({ theme }) => theme.fontSize.m};
	}

	img {
		margin-left: 20px ;
		max-width: 150px;
		object-fit: cover;
	}
`;
