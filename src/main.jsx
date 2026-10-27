import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './notes.css';
import './login.css';
import './interactions.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
