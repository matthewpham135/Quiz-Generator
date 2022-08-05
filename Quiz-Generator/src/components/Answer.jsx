import React from "react"

export default function Answer(props){
    const styles = {
        backgroundColor: props.answer.chosen ? "#D6DBF5" : "#F5F7FB",
        border: props.answer.chosen ? "none" : "1px solid #293264"
    }
    let answer_choice = props.answer.text
    answer_choice = answer_choice.replace(/&quot;/g, '"');
    answer_choice = answer_choice.replace(/&#039;/g, "'");

    return(
        <button 
        className="answer"
        style={styles}
        onClick={props.chooseAnswer}
        >
            {answer_choice}
        </button>
    )
}