import { useState } from 'react'
import Start from "./components/Start"
import Quiz from "./components/Quiz"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Start />
      <Quiz />
    </div>
  )
}

export default App
