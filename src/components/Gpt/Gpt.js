import React from 'react';
import { postGpt } from '../../services/gptBackend';
import './Gpt.css'

class Gpt extends React.Component  {
  constructor(props){
    super(props)
    this.state = { inputValue: '', showText: false, answer: null}
    this.formSubmit = this.formSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event){
    this.setState({ inputValue: event.target.value });
  };

  async componentDidMount(){
    this.setState({showText: false})
  }

  async formSubmit(event) {
    event.preventDefault();
    let result = await postGpt(this.state.inputValue)
    let answer = result?.choices[0]?.message?.content
    this.setState({showText: true, answer})
  }
  
  render() {
    return(
      <>
      <div className='center-gpt'>
        <h1>MichaelGpt</h1>
        <p className='warning'> Please be patient. Engineers are working on performance improvements.</p>
        <br></br>
        <form onSubmit={this.formSubmit}>
          <input className='text'
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              placeholder="Enter text"
            />
          <br></br>
          <button className='form-submit' type="submit">
            Submit
          </button>
        </form>

        {
          this.state.showText ? 
          <>
            <p className='answer'>{this.state.answer}</p>
          </> :
          <></>
        }
      </div>
    </>
    )
  }
}


export default Gpt;
