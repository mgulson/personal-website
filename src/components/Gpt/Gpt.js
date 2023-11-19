import React from 'react';
import { postGpt } from '../../services/gptBackend';


class Gpt extends React.Component  {
  async componentDidMount(){

  }

  async formSubmit(event) {
    event.preventDefault();
    let result = await postGpt('hello world')
    console.log(result)
  }
  
  render() {
    return(
      <>
      <h1>MichaelGpt</h1>
      <form onSubmit={this.formSubmit}>
        <button className='form-submit' type="submit">
          Submit
        </button>
      </form>
    </>
    )
  }
}


export default Gpt;
