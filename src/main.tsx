import { initThemeMode } from 'flowbite-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeInit } from '../.flowbite-react/init';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeInit />
    <App />
  </React.StrictMode>,
);

initThemeMode();
