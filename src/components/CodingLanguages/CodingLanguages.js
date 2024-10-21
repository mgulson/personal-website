import React from 'react';
import  './CodingLanguages.css'
import { postCodingLanguage } from '../../services/codingLanguagesBackend'
import { generateClient } from 'aws-amplify/api';
import { codingLanguagesHardcoded } from '../../services/harcoded'
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import axios from 'axios';
// import { collection, getDocs } from "firebase/firestore"; 
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// const firebaseConfig = {
//   apiKey: "AIzaSyBkFXnkjST4CvY4f1R_vHRzGLiD453jgpA",
//   authDomain: "personal-website-e303f.firebaseapp.com",
//   projectId: "personal-website-e303f",
//   storageBucket: "personal-website-e303f.appspot.com",
//   messagingSenderId: "755379147872",
//   appId: "1:755379147872:web:0e5092bce88882ca491f05",
//   measurementId: "G-PLB7D8JZE1"
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app)

class CodingLanguages extends React.Component  {
  constructor(props){
    super(props)
    this.state = { selectedLanguageId: null}
  }

  async componentDidMount(){
    let result = codingLanguagesHardcoded
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
    // await postCodingLanguage(this.state.selectedOption)
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
