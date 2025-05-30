import React from 'react';
import { Title } from '../../atoms/Title/Title.styles';
import  Average  from '../../atoms/average/Average.component';
import {
	BigAverage,
	StyledDetails,
	StyledInfo,
	StyledLabel,
	StyledSubjectInfo,
	Wrapper,
} from './StudentDetails.styles';

const StudentDetails = ({ student }) => {
	return (
		<Wrapper>
			<BigAverage value={student.average}>{student.average}</BigAverage>
			<Title>{student.name}</Title>
			<StyledDetails>
				<StyledLabel>Course:</StyledLabel>
				<StyledInfo>{student.course}</StyledInfo>
				<StyledLabel>Average grades:</StyledLabel>
				{student.grades.map(({ subject, average }) => (
					<StyledSubjectInfo key={subject}>
						<StyledInfo>{subject}</StyledInfo>
						<Average value={average}>{average}</Average>
					</StyledSubjectInfo>
				))}
			</StyledDetails>
		</Wrapper>
	);
};

export default StudentDetails;
