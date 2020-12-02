import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import '../style/pages-login.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Register = () => {
    const history = useHistory();

  // deve retornar uma token
  const validation = yup.object().shape({
    firstName: yup.string().min(1).required(),
    lastName: yup.string().min(1).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  async function handleSubmit(data) {
    await axios.post("http://localhost:5000/v1/api/user", data);

    alert(`Bem vindo, ${data.firstName} \n faça o login para acessar`);
    history.push('/login');
  }

  return (
    <div>
      <h1>Register page</h1>
      <p>Welcome, would you please enter with e-mail and passworld?</p>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={validation}
      >
        <Form className="login">

        <div className="login-group">
            <Field name="firstName" className="login-field" />
            <ErrorMessage
              component="span"
              name="firstName"
              className="login-error"
            />
          </div>
          <div className="login-group">
            <Field name="lastName" className="login-field" />
            <ErrorMessage
              component="span"
              name="lastName"
              className="login-error"
            />
          </div>
          <div className="login-group">
            <Field name="email" className="login-field" />
            <ErrorMessage
              component="span"
              name="email"
              className="login-error"
            />
          </div>
          <div className="login-group">
            <Field name="password" className="login-field" />
            <ErrorMessage
              component="span"
              name="password"
              className="login-error"
            />
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
