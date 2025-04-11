import UsersList from '../components/organisms/UsersList/UsersList.component';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';

const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.lightGrey};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<UsersList />
			</Wrapper>
		</ThemeProvider>
	);
};

export default App;
