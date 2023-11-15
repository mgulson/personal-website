import React from 'react';
import { postGpt } from '../../services/gptBackend';


class Gpt extends React.Component  {
  async componentDidMount(){
    let result = await postGpt('hello world')
    console.log(result)
  }
  
  render() {
    return(
      <h1>MichaelGpt</h1>
    )
  }
}


export default Gpt;
