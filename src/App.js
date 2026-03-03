import React from 'react';
import Resume from './components/Resume/Resume';
import Results from './components/Results/Results'
import CodingLanguages from './components/CodingLanguages/CodingLanguages';
import Gpt from './components/Gpt/Gpt'
import Practice from './components/practice'
import { BrowserRouter } from 'react-router-dom';
import Consulting from './components/Consulting/Consulting';
import './App.css';

import { Routes, Route, } from "react-router-dom";


class App extends React.Component {
  render() {
    return(
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Resume/>} />
          <Route path="/coding-languages" element={<CodingLanguages/>}/>
          <Route path="/coding-languages/results" element={<Results/>}/>
          <Route path="/gpt" element={<Gpt/>}/>
          <Route path="/practice" element={<Practice/>}/>
          <Route path="/consulting" element={<Consulting/>}/>
        </Routes>
      </BrowserRouter>  
    )
  }
}

export default App;
