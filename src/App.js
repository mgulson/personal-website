import React from 'react';
import Resume from './components/Resume/Resume';
import Results from './components/Results/Results'
import CodingLanguages from './components/CodingLanguages/CodingLanguages';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Routes, Route, HashRouter } from "react-router-dom";
class App extends React.Component {
  render() {
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Resume/>} />
          <Route path="/coding-languages" element={<CodingLanguages/>}/>
          <Route path="/coding-languages/results" element={<Results/>}/>
        </Routes>
      </BrowserRouter>  
    )
  }
}

export default App;
