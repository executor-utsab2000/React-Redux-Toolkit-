import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PrintData from './PrintData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PrintData/>
    </>
  )
}

export default App
