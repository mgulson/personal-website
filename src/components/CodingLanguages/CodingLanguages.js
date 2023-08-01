import React from 'react';
import { Formik, Field, Form } from "formik";
import  './CodingLanguages.css'
import { getCodingLanguages } from './Services.js'

class CodingLanguages extends React.Component  {
  constructor(props){
    super(props)
    this.state = { languageId: null}
  }

  async mySubmit(id){
    let result = await getCodingLanguages()

    console.log(result)
    console.log(result.body)
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
              <label htmlFor="name">Name</label>
              <Field name="id" type="radio" value="1" />
              <label htmlFor="email">Email</label>
              <Field name="id" type="radio" value="2"/>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </>
    )
  }
}

export default CodingLanguages;
