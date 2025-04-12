import UsersList from '../components/organisms/UsersList/UsersList.component';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './App.styles';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<UsersList title='Users list' />
			</Wrapper>
		</ThemeProvider>
	);
};

export default App;
