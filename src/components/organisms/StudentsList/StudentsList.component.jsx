import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import StudentsListItem from '../../molecules/StudentsListItem/StudentsListItem.component';
import { StyledList } from './StudentsList.styles';

const StudentsList = ({ handleOpenStudentDetails }) => {
	const { id } = useParams();
	const { getStudentsByGroup } = useStudents();
	const [students, setStudents] = useState([]);

	useEffect(() => {
		(async () => {
			const studentsData = await getStudentsByGroup(id);
			setStudents(studentsData);
		})();
	}, [id, getStudentsByGroup]);

	return (
		<StyledList>
			{students.map((userData) => (
				<StudentsListItem
					onClick={() => handleOpenStudentDetails(userData.id)}
					key={userData.name}
					userData={userData}
				/>
			))}
		</StyledList>
	);
};

export default StudentsList;
