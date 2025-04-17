import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import Loader from './components/sections/Loader'

function Root() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <App />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)