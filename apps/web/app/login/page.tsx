'use client'
import { supabase } from '../../lib/supabase'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const handleLogin = async () => {
    await supabase.auth.signInWithOtp({ email })
    alert('Vérifiez vos emails')
  }
  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  )
}
