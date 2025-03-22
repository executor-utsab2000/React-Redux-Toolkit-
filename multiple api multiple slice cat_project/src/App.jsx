import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayData from './components/DisplayData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayData />
    </>
  )
}

export default App
