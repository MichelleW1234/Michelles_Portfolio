import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ActiveSectionProvider } from './providers/ActiveSectionProvider.jsx';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActiveSectionProvider>
      <App />
    </ActiveSectionProvider>
  </StrictMode>,
)
