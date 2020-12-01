import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import '../style/pages-login.css';
import axios from 'axios';

const Login = () => {

  // deve retornar uma token
  const validation = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  function handleSubmit(data) {
   axios.post('http://localhost:8080/api/auth',data).then(res => console.log(res))
  }

  return (
    <>
      <h1>Login page</h1>
      <p>Welcome, would you please enter with e-mail and passworld?</p>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form className="login">
          <div className="login-group">
            <Field name="email" className="login-field" />
            <ErrorMessage component="span" name="email" className="login-error" />
          </div>
          <div className="login-group">
            <Field  name="password" className="login-field" />
            <ErrorMessage component="span" name="password" className="login-error" />
          </div>
          <button type="submit" className="login-btn" >Entrar</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
