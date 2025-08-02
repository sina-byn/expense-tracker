import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

// * providers
import AuthContextProvider from './context/AuthContext.tsx';

// * components
import HomePage from './pages/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <HomePage />
    </AuthContextProvider>
  </StrictMode>,
);
