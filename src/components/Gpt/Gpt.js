import React from 'react';
import { postGpt } from '../../services/gptBackend';
import './Gpt.css'

class Gpt extends React.Component  {
  constructor(props){
    super(props)
    this.state = { inputValue: '', showText: null, answer: null}
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
    console.log(result)
    let answer = result?.choices[0]?.content
    console.log(this)
    this.setState({showText: true, answer})
  }
  
  render() {
    return(
      <>
      <h1>MichaelGpt</h1>
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
    </>
    )
  }
}


export default Gpt;
