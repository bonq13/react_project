import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import StudentsList from '../components/organisms/StudentsList/StudentsList.component';
import { useStudents } from '../hooks/useStudents';
import { Title } from '../components/atoms/Title/Title.styles';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';

const Dashboard = () => {
	const { groups } = useStudents();
	const { id } = useParams();

	if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<Title as='h2'>Group {id}</Title>
				<nav>
					{groups.map((group) => (
						<Link key={group} to={`/group/${group}`}>
							{group}{' '}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList />
			</GroupWrapper>
		</Wrapper>
	);
};

// const Dashboard = () => {
// 	const [students, setStudents] = useState([]);
// 	const [groups, setGroups] = useState([]);
// 	const { id } = useParams();

// 	useEffect(() => {
// 		setTimeout(() => {
// 			axios
// 				.get('/groups')
// 				.then(({ data }) => setGroups(data.groups))
// 				.catch((err) => console.log(err));
// 		}, 100);
// 	}, []);

// 	useEffect(() => {
// 		setTimeout(() => {
// 			const url = id ? `/students/${id}` : '/students';
// 			axios
// 				.get(url)
// 				.then(({ data }) => {
// 					setStudents(data.students);
// 				})
// 				.catch((err) => {
// 					console.error(
// 						'Error fetching students:',
// 						err.response || err.message
// 					);
// 				});
// 		}, 100);
// 	}, [id, groups]);

// 	return (
// 		<ViewWrapper>
// 			<nav>
// 				{groups.map((group) => (
// 					<Link key={group} to={`/group/${group}`}>
// 						{group}{' '}
// 					</Link>
// 				))}
// 			</nav>
// 			<UsersList users={students} />
// 		</ViewWrapper>
// 	);
// };

export default Dashboard;
