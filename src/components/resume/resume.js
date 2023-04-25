import React from 'react';
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

        </Grid>
      </Grid>
    </>
    )
  }
}

export default Resume;
