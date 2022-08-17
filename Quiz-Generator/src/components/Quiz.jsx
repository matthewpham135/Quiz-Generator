import React from "react"
import Question from "./Question"
import designblob_1 from "../images/startblob1.png"
import designblob_2 from "../images/startblob2.png"

export default function Quiz() {
    const [quizData, setQuizData] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [question, setQuestion] = React.useState({})
    const [quizStatus, setQuizStatus] = React.useState(true)

    React.useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          .then(res => res.json())
          .then(data => setQuizData(data.results))
    }, [])

    React.useEffect(() => {
        if(question.correct && !question.chosen){
          setScore(oldScore => oldScore + 1)
        }
    }, [question])
    
    function checkAnswer(){
      setQuizStatus(false)
    }
    function startQuiz(){
      setQuizStatus(true)
      setScore(0)
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          .then(res => res.json())
          .then(data => setQuizData(data.results))
    }

    const Questions = quizData.map(question => {
      return(
        <Question 
          data={question}
          key={question.question}
          checkQuestion={question => setQuestion(question)}
          status={quizStatus}
        />
      )
    })

    return (
      <>
        <div className="question--container">
          {Questions}
        </div>
        {quizStatus ? 
        <button className="check--answers" onClick={checkAnswer}>Check answers</button>
        :
        <div className="score--container">
          <h1 className="score">You scored {score}/5 correct answers</h1> 
          <button className="check--answers" onClick={startQuiz}>Play Again</button>
        </div>
      }
        <img src={designblob_1} alt="design" className="designblob__1__quiz"/>
        <img src={designblob_2} alt="design" className="designblob__2__quiz"/>
      </>
    );
  }