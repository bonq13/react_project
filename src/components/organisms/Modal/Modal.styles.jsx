import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	min-width: 500px;
	min-height: 600px;
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: 15px;
	box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 30px;

	&:focus {
		outline: none;
	}
`;
