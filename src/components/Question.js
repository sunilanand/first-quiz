import React from 'react';
import './Question.css';

import {htmlDecode} from '../utils';

export default function Question({question}) {
    return (
        <div className="question">
            <h3>{htmlDecode(question)}</h3>
        </div>
    )
}