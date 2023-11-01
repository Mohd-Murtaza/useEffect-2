import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [hide, setHide] = useState(false)

  return (
    <>
      <button onClick={()=>setHide(pre=>!pre)}>{hide?'Show':'Hide'}</button>
      <Timer flag={hide}/>
    </>
  )
}

export default App
