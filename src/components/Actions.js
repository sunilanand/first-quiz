import React from 'react';
import './Actions.css';

import Button from 'react-bootstrap/Button'

export default function Actions({onNextQuestion}) {
    return <Button varient="success" className="mt-3" onClick={onNextQuestion}>Next</Button>
}
