import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Theme switching logic
function applyTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

applyTheme(); // Apply on initial load

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
// End of theme switching logic

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
