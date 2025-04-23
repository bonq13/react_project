import StudentsListItem from './StudentsListItem.component';

export default {
	title: 'Components/Molecules/StudentsListItem',
	component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const GoodGrades = Template.bind({});
GoodGrades.args = {
	userData: { name: 'Karol Bak', attendance: '100%', average: '5.0' },
};
export const MediumGrades = Template.bind({});
MediumGrades.args = {
	userData: { name: 'Piotr Nowak', attendance: '78%', average: '3.5' },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
	userData: { name: 'Andrzej Adamski', attendance: '45%', average: '2.0' },
};
