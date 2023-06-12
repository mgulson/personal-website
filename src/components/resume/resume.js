import React from 'react';
import Headshot from '../../img/michael-gulson-headshot.JPG'
import Grid from '@mui/material/Grid'
import './Resume.css'
class Resume extends React.Component  {
  render() {
    return(
      <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img className="headshot mobile-image" src={Headshot} alt="Michael Gulson headshot" width="300" height="400"></img>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className='center'>
            <div className= 'center-text'>
              <h1> Michael Gulson</h1>
              <h2> Software Engineer</h2>
              <span>msgulson@gmail.com 8473238610</span>
              <h2>Work Experience</h2>
              <h3 className='company'>Optoro</h3> <span className='dates'>Nov 2021 - Present</span>
              <h3 className='company'>Faraday Software</h3> <span className='dates'>Sep 2020 - Nov 2021</span>
              <h3 className='company'>Special Fitness</h3> <span className='dates'>May 2020 - Sep 2020</span>
              <br></br><br></br>
              <a href="https://www.linkedin.com/in/michael-gulson-578270111" target="_blank">LinkedIn</a>
              <span>                                                          </span>
              <a href="https://www.github.com/michaelgulson" target="_blank">Github</a>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
    )
  }
}

export default Resume;
