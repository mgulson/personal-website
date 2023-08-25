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
    console.log(this.state)
  }

  async mySubmit(id){
    this.setState({selectedLanguageId: id, languages: this.state.languages})
  }



  render() {

    return(
      <>

        <h1>Coding Languages</h1>
        <p>
          select your favorite coding language
        </p>
        
        <>
          {this.state.languages?.map((language) => language.name)}
        </>

        <Formik
          initialValues={{ languageId: null}}
          onSubmit={ (values) => {
            this.mySubmit(values.id)
          }}>
            <Form>
              <label htmlFor="name">Javascript</label>
              <Field name="id" type="radio" value="1" />
              <label htmlFor="email">Java</label>
              <Field name="id" type="radio" value="2"/>
              <label htmlFor="name">Python</label>
              <Field name="id" type="radio" value="3" />
              <label htmlFor="email">C</label>
              <Field name="id" type="radio" value="4"/>              
              <label htmlFor="name">C++</label>
              <Field name="id" type="radio" value="5" />
              <label htmlFor="email">Ruby</label>
              <Field name="id" type="radio" value="6"/>
              <label htmlFor="name">Go</label>
              <Field name="id" type="radio" value="7" />
              <label htmlFor="email">C#</label>
              <Field name="id" type="radio" value="8"/>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </>
    )
  }
}

export default CodingLanguages;
