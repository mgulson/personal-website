import Headshot from '../../img/michael-gulson-headshot-circle.png'
import GithubLogo from '../../img/github-logo-clean.png'
import LinkedinLogo from '../../img/linkedinlogo.png'
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import './Resume.css'

export default function Resume(){
  const [count, setCount] = useState(0)


  function handleClick() {
    setCount(count + 1)
  }

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
              <h2> Software Engineer</h2> &nbsp;
              <a href="mailto:msgulson@gmail.com">msgulson@gmail.com</a>
              <br></br><br></br>
              <a href="https://www.linkedin.com/in/michael-gulson-578270111" target="_blank">
                <img className="github" src={LinkedinLogo}></img>
              </a>
              <span>                                                          </span>
              <a href="https://www.github.com/mgulson" target="_blank">
                <img className="github" src={GithubLogo}></img>
              </a>
              <br></br>
              <h2>Projects</h2>
              <Link to='coding-languages'>Coding Languages</Link>  
              <br></br><br></br>
              <Link to='gpt'>MichaelGpt</Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

