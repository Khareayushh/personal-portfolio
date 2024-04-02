// import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
        <div className="side">
          <Sidebar />
        </div>
        <Home />
      </div>
    </>
  )
}

export default App
