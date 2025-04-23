import React, { useState, useEffect } from 'react';
import { Input } from '../../atoms/input/Input.styles';
import {
	SearchBarWrapper,
	SearchResults,
	SearchWrapper,
	StatusInfo,
	SearchResultsItem,
} from './SearchBar.styles';
import { useCombobox } from 'downshift';
import { useStudents } from '../../../hooks/useStudents';
import debounce from 'lodash.debounce';

export const SearchBar = () => {
	const [matchingStudents, setMatchingStudents] = useState([]);
	const { findStudents } = useStudents();

	const getMatchingStudents = debounce(async ({ inputValue }) => {
		const { students } = await findStudents(inputValue);
		setMatchingStudents(students);
	}, 500);

	const {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		highlightedIndex,
		getItemProps,
		selectedItem,
	} = useCombobox({
		items: matchingStudents,
		onInputValueChange: getMatchingStudents,
	});

	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<p>
					<strong>Teacher</strong>
				</p>
			</StatusInfo>
			<SearchWrapper>
				<Input {...getInputProps()} name='Search' id='Search' />
				{isOpen && matchingStudents.length > 0 && (
					<SearchResults {...getMenuProps()}>
						{matchingStudents.map((item, index) => (
							<SearchResultsItem
								highlighted={highlightedIndex === index}
								{...getItemProps({ item, index })}
								key={item.id}>
								{item.name}
							</SearchResultsItem>
						))}
					</SearchResults>
				)}
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
