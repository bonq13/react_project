import React from 'react';

import { Button } from '../../atoms/Button/Button.styles';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, children, ...props }) => {
	return (
		<ModalWrapper
			isOpen={true}
			onRequestClose={handleClose}
			appElement={document.getElementById('root')}
			{...props}>
			{children}
			<Button onClick={handleClose}>Close</Button>
		</ModalWrapper>
	);
};
export default Modal;
