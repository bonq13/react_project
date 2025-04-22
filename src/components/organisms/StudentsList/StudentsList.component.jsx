import React from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import StudentsListItem from '../../molecules/StudentsListItem/StudentsListItem.component';
import { StyledList } from './StudentsList.styles';
import { Title } from '../../atoms/Title/Title.styles';

const StudentsList = () => {
	const { id } = useParams();
	const { students } = useStudents({ groupId: id });

	return (
		<>
			<StyledList>
				{students.map((userData) => (
					<StudentsListItem key={userData.name} userData={userData} />
				))}
			</StyledList>
		</>
	);
};

export default StudentsList;
