import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import StudentsList from '../components/organisms/StudentsList/StudentsList.component';
import { useStudents } from '../hooks/useStudents';
import { Title } from '../components/atoms/Title/Title.styles';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { useModal } from '../components/organisms/Modal/useModal';
import StudentDetails from '../components/molecules/StudentDetails/StudentDetails.component';

const mockStudent = {
	id: '1',
	name: 'Adam Romański',
	attendance: '39%',
	average: '2.3',
	group: 'A',
	course: 'Business Philosophy',
	grades: [
		{
			subject: 'Business Philosophy',
			average: '3.3',
		},
		{
			subject: 'Marketing',
			average: '4.7',
		},
		{
			subject: 'Modern Economy',
			average: '2.5',
		},
	],
};

const Dashboard = () => {
	const { getGroups, getStudentById } = useStudents();
	const { id } = useParams();
	const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal();
	const [currentStudent, setCurrentStudent] = useState(null);
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		(async () => {
			const groupsData = await getGroups();
			setGroups(groupsData);
		})();
	}, [getGroups]);

	const handleOpenStudentDetails = async (id) => {
		console.log('Clicked student ID:', id);
		const student = await getStudentById(id);
		console.log('Fetched student:', student);
		if (student) {
			setCurrentStudent(student);
			console.log('Current student:', student);
			handleOpenModal();
		} else {
			console.error('Student not found');
		}
	};

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
				<StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
				{isOpen && currentStudent ? (
					<Modal handleClose={handleCloseModal}>
						<StudentDetails student={mockStudent} />
					</Modal>
				) : null}
			</GroupWrapper>
		</Wrapper>
	);
};

export default Dashboard;
