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

        <Formik
          initialValues={{ languageId: null}}
          onSubmit={ (values) => {
            this.mySubmit(values.id)
          }}>

          <Form>
            {
              this.state.languages?.map((language, index) =>
                {

                  return(
                    <>
                      <label htmlFor="name">{language.name}</label>
                      <Field name="id" type="radio" value={index} />
                    </>
                  )
                }
              )
            }
          </Form>
        </Formik>
      </>
    )
  }
}

export default CodingLanguages;
