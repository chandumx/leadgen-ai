import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')

  const testAPI = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/test')
      const data = await res.json()
      setMessage(data.message)
    } catch (err) {
      setMessage('Backend not running')
    }
  }

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>🚀 LeadGen AI</h1>
      <p>Local Business Lead Generation</p>
      
      <button onClick={testAPI} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Test Backend
      </button>
      
      {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
      
      <div style={{ marginTop: '50px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Status:</h3>
        <p>✅ Frontend: Running</p>
        <p>⏳ Backend: {message || 'Not tested'}</p>
      </div>
    </div>
  )
}