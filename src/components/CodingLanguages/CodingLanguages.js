import React from 'react';
import { Formik, Field, Form } from "formik";

import './CodingLanguages.css'

class CodingLanguages extends React.Component  {

  render() {

    return(
      <>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={ (values) => {
            console.log(values)
          }}>
            <Form>
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </>
    )
  }
}

export default CodingLanguages;
