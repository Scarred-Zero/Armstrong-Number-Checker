import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AlertProvider } from './components/alert/AlertContext';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </StrictMode>,
)
