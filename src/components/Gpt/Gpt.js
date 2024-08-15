import React, { useState, useEffect } from 'react';
import { postGpt } from '../../services/gptBackend';
import './Gpt.css';

import { CircularProgress } from '@mui/material';

function Gpt() {
  const [inputValue, setInputValue] = useState('');
  const [showText, setShowText] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setShowText(false);
  }, []);

  const formSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const result = await postGpt(inputValue);
    const answer = result?.choices[0]?.message?.content;
    setShowText(true);
    setAnswer(answer);
    setLoading(false);
  };

  return (
    <div className='center-gpt'>
      <h1>MichaelGpt</h1>
      <form onSubmit={formSubmit}>
        <input
          className='text'
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Enter Prompt'
        />
        <br />
        <button className='form-submit' type='submit' disabled={loading}>
          Submit
        </button>
      </form>

      {
        loading ?
        <CircularProgress></CircularProgress>
        :
        <>
          <p className='answer'>{answer}</p>
        </>
      }
    </div>
  );
};

export default Gpt;