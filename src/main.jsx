import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { ContextApiProvider } from "./context/context";
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <ContextApiProvider>
    <App />
    </ContextApiProvider>  
  </Router>  
)
