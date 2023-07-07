import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  }
  const handleDecrease = () => {
    setCount((prevCount) => prevCount -1);
  }
  const handleDouble = () => {
    setCount((prevCount) => prevCount * 2);
  }
  const handleReset = () => {
    setCount(0);
  }
  


  return (
    <>
      <div style={{fontSize: '20px'}}>
        {count}
      </div>
      <div className="card">
        <button onClick={handleIncrease}>
          +1
        </button>
        <button onClick={handleDecrease}>
          -1
        </button>
        <button onClick={handleDouble}>
          x2
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
