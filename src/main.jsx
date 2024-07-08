import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <GoogleOAuthProvider
 clientId='449805944393-hgrdpg5gik27l6oo0l7it49aj5hqdpsf.apps.googleusercontent.com'
 >


    <App />
 </GoogleOAuthProvider>
  </React.StrictMode>,
)
