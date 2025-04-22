import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const UsersContext = React.createContext({
	users: [],
	handleAddUser: () => {},
	deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchStudents = async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Opóźnienie 1 sekunda
			axios
				.get('/students')
				.then(({ data }) => {
					setUsers(data.students);
				})
				.catch((err) => {
					console.log('Error:', err); 
					setUsers([]);
				});
		};

		fetchStudents();
	}, []);

	const deleteUser = (name) => {
		const filteredUsers = users.filter((user) => user.name !== name);

		setUsers(filteredUsers);
	};

	const handleAddUser = (formValues) => {
		const newUser = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};

		setUsers([newUser, ...users]);
	};

	return (
		<UsersContext.Provider
			value={{
				users,
				handleAddUser,
				deleteUser,
			}}>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersProvider;
