import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import './styles/animations.css'
import Loader from './components/layout/Loader'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Loader />
    <App />
  </React.StrictMode>
)