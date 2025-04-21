import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import { worker } from './mocks/browser';


worker
	.start({
		onUnhandledRequest: 'warn', // Wypisze ostrzeżenie dla nieobsłużonych żądań
	})
	.then(() => {
		console.log('MSW worker started');
	})
	.catch((err) => {
		console.error('Failed to start MSW worker:', err);
	});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
