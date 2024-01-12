import React from 'react';
import Resume from './components/Resume/Resume';
import Results from './components/Results/Results'
import CodingLanguages from './components/CodingLanguages/CodingLanguages';
import Gpt from './components/Gpt/Gpt'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Routes, Route, HashRouter } from "react-router-dom";
import Demo from './components/Demo/Demo';
class App extends React.Component {
  render() {
    return(
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Resume/>} />
          <Route path="/coding-languages" element={<CodingLanguages/>}/>
          <Route path="/coding-languages/results" element={<Results/>}/>
          <Route path="/gpt" element={<Gpt/>}/>
          <Route path="/demo" element={<Demo/>}/>
        </Routes>
      </BrowserRouter>  
    )
  }
}

export default App;
