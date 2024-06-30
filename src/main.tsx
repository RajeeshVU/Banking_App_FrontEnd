import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/shared/errorBoundary/ErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
    <BrowserRouter>
    <ErrorBoundary>
    <Suspense fallback={<h1 style={{color:"red"}}>Loading</h1>}>
    <App />
    </Suspense>
    </ErrorBoundary>
    </BrowserRouter>
   
  </React.StrictMode>,
)
