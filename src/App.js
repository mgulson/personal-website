import React from 'react';
import Resume from './components/Resume/Resume';
import CodingLanguages from './components/CodingLanguages/CodingLanguages';


import './App.css';

import { Routes, Route, HashRouter } from "react-router-dom";
class App extends React.Component {
  render() {
    return(
      <HashRouter>    
        <Routes>
          <Route path="/" element={<Resume/>} />
          <Route path="/personal-website" element={<Resume/>} />
          <Route path="/coding-languages" element={<CodingLanguages/>}/>
        </Routes>
      </HashRouter>
    )
  }
}

export default App;
