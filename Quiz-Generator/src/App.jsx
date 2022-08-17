import React from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

export default function App() {
  const [startState, setStartState] = React.useState(true)

  function startQuiz(){
    setStartState(false)
  }

    return (
      <main>
        {startState ? <Start 
          handleClick={startQuiz}  
        /> 
        : 
        <Quiz />}
      
      </main>
    );
  }