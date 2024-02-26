import { useState } from 'react'

import './App.css'
import Dropdown from './component/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Dropdown />
    <div className='outer'>
        <div className='inner'>
          DONUT:)
        </div>
    </div>
    </>
  )
}

export default App
