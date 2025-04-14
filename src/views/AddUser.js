import React, { useContext, useReducer } from 'react';
import { ViewWrapper } from '../components/molecules/VievWrapper/VievWrapper.styles.jsx';
import { Title } from '../components/atoms/Title/Title.styles.jsx';
import FormField from '../components/molecules/FormField/FormField.component.jsx';
import { Button } from '../components/atoms/Button/Button.styles.jsx';
import { UsersContext } from '../providers/UsersProvider.jsx';
import { useForm } from '../hooks/useForm.js';
// rscp !!!!

const initialFormState = {
	name: '',
	attendance: '',
	average: '',
	consent: false,
	error: '',
};

const AddUser = () => {
	const { handleAddUser } = useContext(UsersContext);
	const {
		formValues,
		handleInputChange,
		halndeClearForm,
		handleThrowError,
		handleToggleConsent,
	} = useForm(initialFormState);

	const handleSubmitUser = (e) => {
		e.preventDefault();
		if (formValues.consent) {
			handleAddUser(formValues);
			halndeClearForm(initialFormState);
		} else {
			handleThrowError('You need to give consent');
		}
	};

	return (
		<ViewWrapper as='form' onSubmit={handleSubmitUser}>
			<Title>Add new student</Title>
			<FormField
				label='Name'
				id='name'
				name='name'
				value={formValues.name}
				onChange={handleInputChange}
			/>
			<FormField
				label='Attendance'
				id='attendance'
				name='attendance'
				value={formValues.attendance}
				onChange={handleInputChange}
			/>
			<FormField
				label='Average'
				id='average'
				name='average'
				value={formValues.average}
				onChange={handleInputChange}
			/>
			<FormField
				label='Consent'
				id='consent'
				name='consent'
				type='checkbox'
				checked={formValues.consent}
				onChange={handleToggleConsent}
			/>

			<Button type='submit'>Add</Button>
			{formValues.error ? <p>{formValues.error}</p> : null}
		</ViewWrapper>
	);
};

export default AddUser;
