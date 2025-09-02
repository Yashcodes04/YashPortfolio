import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Set dark mode as default
if (typeof window !== 'undefined') {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode === null) {
    localStorage.setItem('darkMode', 'true');
    document.documentElement.classList.add('dark');
  } else if (JSON.parse(savedDarkMode)) {
    document.documentElement.classList.add('dark');
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
