import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactUs from './ContactUs.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactUs />
  </StrictMode>,
)
