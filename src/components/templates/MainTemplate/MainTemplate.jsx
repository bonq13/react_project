import React from 'react';
import styled from 'styled-components';
import Navigation from '../../organisms/Navigation/Navigation.component';
import { Wrapper } from './MainTemplate.styles';
import { SearchBar } from '../../organisms/SearchBar/SearchBar.component';
import NewsSection from '../NewsSection/NewsSection.component';

const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			{children}
			<NewsSection />
		</Wrapper>
	);
};

export default MainTemplate;
