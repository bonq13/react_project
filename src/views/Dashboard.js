import React, { useContext} from 'react';
import { ViewWrapper } from '../components/molecules/VievWrapper/VievWrapper.styles';
import UsersList from '../components/organisms/UsersList/UsersList.component';
import { UsersContext } from '../providers/UsersProvider';

const Dashboard = () => {
	const {users} = useContext(UsersContext)

	return (
		<ViewWrapper>
			<UsersList users={users}/>
		</ViewWrapper>
	);
};


export default Dashboard;
