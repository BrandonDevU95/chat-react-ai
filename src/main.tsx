import './index.css';

import App from './App.tsx';
import { FirebaseAppProvider } from 'reactfire';
import FirebaseServices from './config/firebase-services.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { firebaseConfig } from './config/firebase.ts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<FirebaseServices>
				<App />
			</FirebaseServices>
		</FirebaseAppProvider>
	</StrictMode>
);
