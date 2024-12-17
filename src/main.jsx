import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JavaScript
import 'bootstrap-icons/font/bootstrap-icons.css'; // Icons
import './assets/style/style.css'
import './assets/style/style_responsive.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
