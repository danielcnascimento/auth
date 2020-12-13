import React from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";
import { useParams } from "react-router-dom";

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

import jwt from 'jwt-decode';
import axios from "axios";

import {RiMailSendFill } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import {FiEdit3} from 'react-icons/fi';
import "../style/components-features.css";
import "../style/components-message-create.css";

const MessageUpdate = () => {
  const params = useParams();
  console.log(params.id);

  const validation = yup.object().shape({
    subject: yup.string().min(1).max(200).required("opa, não esqueça de colocar um assunto!"),
    message: yup.string().min(1).max(500).required("esse campo é obigatorio!"),
  });

    async function handleUpdate(data) {
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

    console.log(mainData);

    await axios
      .put(`http://localhost:5000/usuario/${params.id}`,mainData)
      .then(() => hideModal(false));
        

  };

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
            onSubmit={handleUpdate}
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
    <div className="features-item-update" onClick={showModal}>
      <FiEdit3 className="item" size={28} color="#fff" />
    </div>
  );
};

export default MessageUpdate;
