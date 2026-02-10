import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const testAPI = async () => {
    setLoading(true)
    setMessage('Connecting...')
    
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://leadgen-ai-2.onrender.com'
      const res = await fetch(`${API_URL}/api/test`)
      const data = await res.json()
      setMessage(data.message)
    } catch (err) {
      setMessage('Backend not running or CORS error')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>🚀 LeadGen AI</h1>
      <p>Local Business Lead Generation</p>
      
      <button 
        onClick={testAPI} 
        disabled={loading}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        {loading ? 'Testing...' : 'Test Backend'}
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
