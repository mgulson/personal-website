import React from 'react';
import { Link } from 'react-router-dom'
import Headshot from '../../img/michael-gulson-headshot.JPG'
import Grid from '@mui/material/Grid'
import './Resume.css'
class Resume extends React.Component  {
  render() {
    return(
      <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img className="headshot" src={Headshot} alt="Michael Gulson headshot" width="300" height="400"></img>
        </Grid>
        <Grid item xs={8}>
          <h1> Michael Gulson</h1>
          <h2> Software Engineer</h2>
          <span>msgulson@gmail.com 8473238610</span>
          <br></br>
          <h2>Work Experience</h2>
          <h3 className='company'>Optoro</h3> <span>Nov 2021 - Present</span>
          <br></br> <br></br>
          <h3 className='company'>Faraday Software</h3> <span>Sep 2020 - Nov 2021</span>
          <br></br><br></br>
          <h3 className='company'>Special Fitness</h3> <span>May 2020 - Sep 2020</span>
          <br></br>
          <br></br>
          <Link to={{ pathname: "https://www.linkedin.com/in/michael-gulson-578270111"}} target='_blank'>LinkedIn</Link>
          <span>                                                          </span>
          <Link to={{ pathname: 'https://www.github.com/michaelgulson'}} target="_blank">Github</Link>
        </Grid>
      </Grid>
    </>
    )
  }
}

export default Resume;
