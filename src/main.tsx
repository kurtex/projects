import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import './index.css'
import 'tw-elements-react/dist/css/tw-elements-react.min.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
