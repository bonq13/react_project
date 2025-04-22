import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { worker } from './mocks/browser';

worker.start().then(() => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
});
