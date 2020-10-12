import React from 'react';
import './Options.css';
import ListGroup from 'react-bootstrap/ListGroup';
import {htmlDecode} from '../utils';

export default function Options({answers, onAnswer}) {
    return(
        <div className="options">
            <ListGroup>
                {
                    answers.map((ans,i) => {
                        return <ListGroup.Item action variant="light" key={i.toString()} onClick={onAnswer}>{htmlDecode(ans)}</ListGroup.Item>
                    })
                }
            </ListGroup>
        </div>
    )
}
