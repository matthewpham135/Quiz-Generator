import React from "react"
import Answer from "./Answer"

export default function Question(props) {

    const [answers, setAnswers] = React.useState(shuffleArray(getAnswers()))
    
    function getAnswers(){
        const array = [
          ...props.data.incorrect_answers,
          props.data.correct_answer
        ]
        const result = array.map(answer => {
          return answer === props.data.correct_answer ?
            {text: answer, chosen: false, correct: true} :
            {text: answer, chosen: false, correct: false}
        })
        return result
    }
    
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array
    }

    function chooseAnswer(chosenAnswer){
        setAnswers(oldAnswers => oldAnswers.map(answer => {
          return chosenAnswer.text === answer.text ? 
              {...answer, chosen: !answer.chosen} : 
              {...answer, chosen: false}
        })
        )
    }
    
    const choices = answers.map(choice => (
        <button 
           className="answer"
           style={
            props.status ? {
              border: choice.chosen ? "none" : "1px solid #293264",
              backgroundColor: choice.chosen ? "#D6DBF5" : "#F5F7FB"}
                : 
              {
                backgroundColor: choice.chosen && ((choice.correct && "#94D7A2") ||
                (!choice.correct && "#F8BCBC")),
              border: choice.chosen ? "none" : "1px solid #293264"}
           }
           onClick={() => {props.checkQuestion(choice); chooseAnswer(choice)}}
        >
            {formatAnswer(choice.text)}
        </button>
    ))
    
    function formatAnswer (answer){
      let answer_choice = answer
      answer_choice = answer_choice.replace(/&quot;/g, '"')
      answer_choice = answer_choice.replace(/&#039;/g, "'")
      return answer_choice
    }          


    let question = props.data.question;

    question = question.replace(/&quot;/g, '"');
    question = question.replace(/&#039;/g, "'");

    return (
      <div className="question--card">
        <h1 className="question">{question}</h1>
        <div className="answer--choices">
            {choices}
        </div>
        <div className="question--line">
        </div>
      </div>
    );
  }