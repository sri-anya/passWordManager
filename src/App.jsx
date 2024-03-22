import { useState } from 'react'
import NavBar from './components/NavBar'
import Manager from './components/Manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Manager/>
    </>
  )
}

export default App
