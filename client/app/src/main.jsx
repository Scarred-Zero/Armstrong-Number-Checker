import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AlertProvider } from './components/alert/AlertContext';
import { AuthProvider } from './context/AuthContext';
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </UserProvider>
    </AuthProvider>
  </StrictMode >,
)

