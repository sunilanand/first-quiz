import React, {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';

import Container from 'react-bootstrap/Container';

import Quiz from './components/Quiz';

const endPoint = './mock.json';

export default function App() {

  const [data, setData] = useState({questions: []});

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const quizData = await axios.get(endPoint);
    setData({questions: quizData.data.results});
  }

  return (
    <Container fluid>
      <div className="app">
        {/* <h1>My First React Based Quiz App</h1> */}
        <Quiz data={data}/>
      </div>
    </Container>
  );
}