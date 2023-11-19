import React from 'react';
import { postGpt } from '../../services/gptBackend';


class Gpt extends React.Component  {
  async componentDidMount(){
    let result = await postGpt('what is chatgpt')
    console.log(result)
  }
  
  render() {
    return(
      <h1>MichaelGpt</h1>
    )
  }
}


export default Gpt;
