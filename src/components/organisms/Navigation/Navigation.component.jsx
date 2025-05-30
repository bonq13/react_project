import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles';

const Navigation = () => {
	return (
		<Wrapper>
			<Logo>
				<h1>
					Study
					<br />
					Buddy
				</h1>
			</Logo>
			<StyledLink to='/group'>Dashboard</StyledLink>
			{/* <StyledLink to='/add-user'>Add user</StyledLink> */}
			{/* <StyledLink to='/asd'>Settings</StyledLink>
			<StyledLink to='/sdvsdv'>Logout</StyledLink> */}
		</Wrapper>
	);
};

export default Navigation;

// import { Logo, StyledLink, Wrapper } from './Navigation.styles';

// const Navigation = () => {
// 	return (
// 		<Wrapper>
// 			<Logo>
// 				<h1>
// 					Study
// 					<br />
// 					Buddy
// 				</h1>
// 			</Logo>
// 			<StyledLink to='/'>Dashboard</StyledLink>
// 			<StyledLink to='/add-user'>Add user</StyledLink>
// 			<StyledLink to='/'>Settings</StyledLink>
// 			<StyledLink to='/'>Logout</StyledLink>
// 		</Wrapper>
// 	);
// };
