import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="welcome-container">
      <h1>Welcome to LegalEase</h1>
      <p className="subtitle">
        Your AI-powered legal case management platform
      </p>

      <div className="actions">
        <button className="primary-btn">Get Started</button>
        <button className="secondary-btn">Learn More</button>
      </div>
    </div>
    </>
  )
}

export default App
