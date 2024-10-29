// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import './components/Main/Main'
// import './components/Sidebar/Sidebar'

import ContextProvider from './Context/Context.jsx';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
