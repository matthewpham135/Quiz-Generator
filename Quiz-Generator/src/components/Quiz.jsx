import React from "react"
import Question from "./Question"
import designblob_1 from "../images/startblob1.png"
import designblob_2 from "../images/startblob2.png"

export default function Quiz() {
    const [quizData, setQuizData] = React.useState([])

    React.useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          .then(res => res.json())
          .then(data => setQuizData(data.results))
    }, [])

    const Questions = quizData.map(question => {
      return(
        <Question 
          data={question}
          key={question.question}
        />
      )
    })

    return (
      <>
        <div className="question--container">
          {Questions}
        </div>
        <button className="check--answers">Check answers</button>
        <img src={designblob_1} alt="design" className="designblob__1__quiz"/>
        <img src={designblob_2} alt="design" className="designblob__2__quiz"/>
      </>
    );
  }