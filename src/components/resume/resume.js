import React from 'react';
import Headshot from '../../img/michael-gulson-headshot.JPG'

class Resume extends React.Component  {
  render() {
    return(
      <>
      <img className="headshot" src={Headshot} alt="Michael Gulson headshot" width="300" height="400"></img>
      <div>
        <span>Michael Gulson</span>
        <br></br>
        <span>Software Engineer</span>
      </div>
      </>
    )
  }
}

export default Resume;
