import { useState } from 'react';
import Modal from './Modal.component';

export const useModal = (initialState = false) => {
	const [isOpen, setModalState] = useState(initialState);

	const handleOpenModal = () => {
		setModalState(true);
	};
	const handleCloseModal = () => {
		setModalState(false);
	};

	return {Modal, isOpen, handleCloseModal, handleOpenModal};
};
