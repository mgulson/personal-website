import React from 'react';
import { Formik, Field, Form } from "formik";
import  './CodingLanguages.css'
import { getCodingLanguages } from './Services.js'

class CodingLanguages extends React.Component  {
  constructor(props){
    super(props)
    this.state = { selectedLanguageId: null}
  }

  async componentDidMount(){
    let result = await getCodingLanguages()

    this.setState({ languages: result, selectedLanguageId: null } )
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  async mySubmit(id){
    this.setState({selectedLanguageId: id, languages: this.state.languages})
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
  }

  render() {

    return(
      <>

        <h1>Coding Languages</h1>
        <p>
          select your favorite coding language
        </p>

        <form onSubmit={this.formSubmit}>

          {
                this.state.languages?.map((language, index) =>
                  {

                    return(
                      <>
                        <label>
                            {language.name}
                            <input
                              type="radio"
                              value={index}
                              checked={this.state.selectedOption === String(index)}
                              onChange={this.onValueChange}
                            />
                        </label>
                      </>
                    )
                  }
                )
              }
        <button type="submit">
          Submit
        </button>
      </form>

      </>
    )
  }
}

export default CodingLanguages;
