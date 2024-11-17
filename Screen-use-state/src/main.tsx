import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import JsonAttribute from './JsonAttribute.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JsonAttribute />
  </StrictMode>,
)
