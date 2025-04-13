import React from 'react';
import Navigation from '../organisms/Navigation/Navigation.component';
import { Wrapper } from '../templates/MainTemplate.styles';

const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			{children}
		</Wrapper>
	);
};

export default MainTemplate;
