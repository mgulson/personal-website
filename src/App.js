import React from 'react';
import Resume from './components/Resume/Resume';
import CodingLanguages from './components/CodingLanguages/CodingLanguages';


import './App.css';

import { Routes, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return(
      <Routes basename={'/personal-website'}>
        <Route path="/" element={<Resume/>} />
        <Route path="/coding-languages" element={<CodingLanguages/>}/>
      </Routes>
    )
  }
}

export default App;
