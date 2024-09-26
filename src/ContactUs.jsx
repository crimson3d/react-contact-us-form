import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactUs.css";
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';


function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        consent: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("This field is required"),
        lastName: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Please enter a valid email address")
          .required("This field is required"),
        queryType: Yup.string().required("Please select a query type"),
        message: Yup.string().required("This field is required"),
        consent: Yup.boolean()
          .oneOf(
            [true],
            "To submit this form, please consent to being contacted"
          )
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setIsSubmitted(true);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="main">
          {isSubmitted && (
            <div className="success__message">
              <div className="message__title">
              <i className="bi bi-check-circle"></i>
              <p>Message Sent!</p>
              </div>
              <p>Thanks for completing the form. We´ll be in touch soon!</p>
            </div>
          )}
          <h1 className="main__title">Contact Us</h1>
          <div className="main__section">
            <div className="section__field">
              <label htmlFor="firstName" className="field__label">
                First Name *
              </label>
              <Field
                name="firstName"
                type="text"
                className={`field__input ${errors.firstName && touched.firstName ? 'error-border' : ''}`}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>
            <div className="section__field">
              <label htmlFor="lastName" className="field__label">
                Last Name *
              </label>
              <Field
                name="lastName"
                type="text"
                className={`field__input ${errors.lastName && touched.lastName ? 'error-border' : ''}`}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>
          </div>
          <div className="main__email">
            <label htmlFor="email" className="email__label">
              Email Address *
            </label>
            <Field
              name="email"
              type="email"
              className={`email__input ${errors.email && touched.email ? 'error-border' : ''}`}
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="main__radio">
            <legend className="radio__label">Query Type *</legend>
            <div className="radio__content">
              <label className="content__option">
                <Field type="radio" name="queryType" value="general" />
                General Enquiry
              </label>
              <label className="content__option">
                <Field type="radio" name="queryType" value="support" />
                Support Request
              </label>
            </div>
            <ErrorMessage
              name="queryType"
              component="div"
              className="error"
            />
          </div>
          <div className="main__message">
            <label htmlFor="message" className="message__label">
              Message *
            </label>
            <Field
              name="message"
              as="textarea"
              className={`message__textarea ${errors.message && touched.message ? 'error-border' : ''}`}
            />
            <ErrorMessage name="message" component="div" className="error" />
          </div>
          <div className="main__consent">
            <label className="consent__label">
              <Field type="checkbox" name="consent" />
              I consent to being contacted by the team *
            </label>
            <ErrorMessage name="consent" component="div" className="error" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="main__button"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactUs;
