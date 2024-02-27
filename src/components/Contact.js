import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
const Contact = (props) => {
  return (
    <div className="contact-section-content" id={props.id}>
      <h1 className='contact-heading'>CONTACT</h1>
      <p className='contact-para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur
        ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
        quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
        Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      <Row className='contact-body'>
        <Col className='contact-body-letf'>
          <div className='contact-body-sub-letf'>
            <div>
              <h2>Location:</h2>
              <p>A108 Adam Street, New York, NY</p>
              <p>535022</p>
            </div>
            <div>
              <h2>Email:</h2>
              <p>info@example.com</p>
            </div>
            <div>
              <h2>Call:</h2>
              <p>+1 5589 55488 55s</p>
            </div>
          </div>
        </Col>
        <Col className='contact-body-right'>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className='contact-body-sub-right'>
                <div >
                <div>
                  <label htmlFor="name">Your Name</label>
                </div>
                <div>
                  <Field name="name" className="contact-input" />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" >Your Email</label>
                </div>
                <div>
                  <Field name="email" className="contact-input" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                </div>
                <div>
                  <Field name="subject" className="contact-input" />
                  {errors.subject && touched.subject ? (
                    <div>{errors.subject}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                </div>
                <div>
                  <Field name="message" className="contact-input" type="textarea" />
                  {errors.message && touched.message ? (
                    <div>{errors.message}</div>
                  ) : null}
                </div>
                <button className="contact-button" type="submit">Submit</button>
              </Form>
            )}
          </Formik></Col>
      </Row>

    </div>
  )
}

export default Contact