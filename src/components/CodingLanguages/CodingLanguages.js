import React from 'react';
import  './CodingLanguages.css'
import { getCodingLanguages, postCodingLanguage } from '../../services/codingLanguagesBackend'

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

  async formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption)
    await postCodingLanguage(this.state.selectedOption)
    window.location.href += '/results'
  }

  render() {

    return(
      <>

        <h1 className='center-coding-languages'>Coding Languages</h1>
        <p className='center-coding-languages'>
          select your favorite coding language
        </p>
        <div className='center-form'>
        <div className='center-text'>
          <form onSubmit={this.formSubmit}>

            {
                  this.state.languages?.map((language, index) =>
                    {

                      return(
                        <>
                        <div className='form-row'>
                          <label>
                          <input
                                type="radio"
                                value={index + 1}
                                checked={this.state.selectedOption === String(index + 1)}
                                onChange={this.onValueChange}
                              />
                              {language.name}
                          </label>
                          </div>
                        </>
                      )
                    }
                  )
                }
          <button className='form-submit' type="submit">
            Submit
          </button>
        </form>
      </div>
      </div>

      </>
    )
  }
}

export default CodingLanguages;
