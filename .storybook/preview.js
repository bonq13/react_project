import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/assets/styles/theme';
import { GlobalStyle } from '../src/assets/styles/GlobalStyle';

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Story />
		</ThemeProvider>
	),
];

export default preview;
