import React, { useEffect, useState } from 'react';
import './Quiz.css';
import Card from 'react-bootstrap/Card';

import Question from './Question';
import Options from './Options';
import Actions from './Actions';
import Popup from './Popup';

import {shuffle} from '../utils';



export default function Quiz(props) {
    const [idx, setIdx] = useState(0);
    // const [answers, setAnswers] = useState([]);

    const [popup, setPopup] = useState({
        title: '',
        message: '',
        open: false
    });

    // const onOpenModal = i => {
        

    //     console.log(popup)
        
    // };
    // const onCloseModal = () => {
    //     setPopup(false);

    //     console.log(popup)
    // };

    let oQuestion;
    let queText = null;
    let answers = [];

    useEffect(() => {
        // console.log(">>>>",props.data);
        // console.log(">>>>>>>>",popup);

        
    }, []);

    
    if (props.data.questions.length > 0)
    {
        oQuestion = props.data.questions[idx];
        queText = oQuestion.question;
        answers = oQuestion.incorrect_answers;
        
        answers.push(oQuestion.correct_answer);

        answers = shuffle(answers);
        
    }

    function onAnswer(e)
    {
        const selection = e.target.innerHTML;

        if (selection === oQuestion.correct_answer)
        {
            console.log("correct...")
            setPopup({
                title: "Correct!",
                message: "That's correct!",
                open: true 
            });
            // onOpenModal("correct...");
        }
    }
    

    function onNextQuestion(e){
        setIdx(idx +1);
    }

    return (
        <div>
            <Card className='mt-2'>
                <Card.Title>
                    <h2>Quiz</h2>
                </Card.Title>
                <Card.Body>
                    <Question question={queText} />
                    <Options onAnswer={onAnswer} answers={answers} />
                    <Actions onNextQuestion={onNextQuestion} />
                </Card.Body>
            </Card>
            <Popup popup={popup}/>
        </div>
    )
}