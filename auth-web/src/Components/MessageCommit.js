import React from "react";
import ReactModal from "react-modal";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

import jwt from 'jwt-decode';
import axios from "axios";

import { RiMailAddLine, RiMailSendFill } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import { useModal } from "react-modal-hook";
import "../style/components-message-create.css";

// pode exportar diversos botões para controle de modal de : delete, update e create.

const MessageCommit = () => {

  const validation = yup.object().shape({
    subject: yup
      .string()
      .min(1)
      .max(200)
      .required("opa, não esqueça de colocar um assunto!"),
    message: yup
      .string()
      .min(1)
      .max(500)
      .required("esse campo é obigatorio!"),
  });

  async function handleSubmit(data) {
    const token = localStorage.getItem('acesso');
    const user = jwt(token);

    const {email, firstName, lastName, password} = user;

    const mainData = {
      ...data,
      email,
      firstName,
      lastName,
      password
    }

    await axios.post('http://localhost:5000/v1/api/user',mainData).then(()=> hideModal(false))

  }

  const [showModal, hideModal] = useModal(() => (

    <ReactModal isOpen>
      <div className="modal-create-container">
        <div className="close-area">
          <button onClick={hideModal} className="close-btn">
            <ImBin size={25} color="#fff" />
          </button>
        </div>
        <div>
          <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validation}
          >
            <Form className="modal-create-form">
              <div className="modal-submit-btn-area">
                <button type="submit" className="modal-submit-btn">
                  <RiMailSendFill size={25} color="#fff" /> ENVIAR
                </button>
              </div>
              <div className="modal-create-form-group">
                <label htmlFor="name" className="form-field-label">
                  De:
                </label>
                <input
                  type="text"
                  className="modal-create-form-field"
                  id="name"
                  readOnly
                ></input>
                <ErrorMessage
                  name="firstName"
                  className="modal-create-form-error"
                />
              </div>
              <div className="modal-create-form-group">
                <label htmlFor="subject" className="form-field-label">
                  Assunto:
                </label>
                <Field
                  className="modal-create-form-field"
                  name="subject"
                  id="subject"
                ></Field>
                <ErrorMessage
                  name="subject"
                  className="modal-create-form-error"
                />
              </div>
              <div className="modal-create-form-group">
                <label htmlFor="message" className="form-field-label">
                  Mensagem:
                </label>
                <Field
                  className="modal-create-form-field-message"
                  name="message"
                  as="textarea"
                  id="message"
                ></Field>
                <ErrorMessage
                  name="message"
                  className="modal-create-form-error"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </ReactModal>
  ));

  return (
    <div className="create-message-btn" onClick={showModal}>
      <div className="create-item-btn">
        <div>
          <RiMailAddLine size={27} color="#fff" />
        </div>
        <div>Escrever</div>
      </div>
    </div>
  );
};

export default MessageCommit;
