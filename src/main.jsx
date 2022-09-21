import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Header} from "../src/components/header/Header"
import {Home} from "../src/components/home/Home"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <main className="main">
        <Home />
    </main>
    
  </React.StrictMode>
)
