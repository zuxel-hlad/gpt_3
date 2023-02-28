import React from 'react';
import { createRoot } from 'react-dom/client';
import './plugins/height';
import './assets/sass/style.scss';
import App from './components/App/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
