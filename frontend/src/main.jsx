import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { SocketProvider } from './Provider/SocketProvider'
import PlaygroundProvider from './Provider/PlaygroundProvider.jsx'
import ProviderModal from './Provider/ProviderModal.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
    <SocketProvider>
    <PlaygroundProvider>
    <ProviderModal>
    <App />
    </ProviderModal>
    </PlaygroundProvider>
    </SocketProvider>
    </AuthProvider>
  </Router>
)
