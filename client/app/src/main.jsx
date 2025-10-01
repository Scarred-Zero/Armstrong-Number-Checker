import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AlertProvider } from './components/alert/AlertContext';
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </AuthProvider>
  </StrictMode>,
)

