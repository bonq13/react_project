import React from 'react';
import FormField from './components/molecules/FormField/FormField.component';
import { renderWithProviders } from './helpers/renderWithProviders';

describe('form field', () => {
	it('renders a component', () => {
		renderWithProviders(
			<FormField label='name' name='name' id='name'></FormField>
		);
	});
});
