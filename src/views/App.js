import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './App.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import UsersProvider from '../providers/UsersProvider';

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<UsersProvider>
						<Wrapper>
							<Routes>
								<Route path='/' element={<Dashboard />}></Route>
								<Route path='/add-user' element={<AddUser />}></Route>
							</Routes>
						</Wrapper>
					</UsersProvider>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default App;
