import React from "react";
import ReactModal from "react-modal";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { RiMailAddLine } from "react-icons/ri";
import {ImBin} from "react-icons/im";
import { useModal } from "react-modal-hook";
import "../style/components-message-create.css";

// pode exportar diversos botões para controle de modal de : delete, update e create.

const MessageCommit = () => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
     
      <div className="modal-create-container">
      <div  className="close-area">
          <button onClick={hideModal} className="close-btn">
            <ImBin size={25} color="#fff" />
          </button>
        </div>
        <div>
          <Formik initialValues={{}}>
            <Form className="modal-create-form">
              <div className="modal-create-form-group">
                <label htmlFor="firstName" >Nome:</label>
                <Field
                  className="modal-create-form-field"
                  name="firstName"
                  id="firstName"
                ></Field>
                <ErrorMessage
                  name="firstName"
                  className="modal-create-form-error"
                />
              </div>
              <div className="modal-create-form-group">
                <Field
                  className="modal-create-form-field"
                  name="subject"
                ></Field>
                <ErrorMessage
                  name="subject"
                  className="modal-create-form-error"
                />
              </div>
              <div className="modal-create-form-group">
                <Field
                  className="modal-create-form-field"
                  name="message"
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
    <div className="create-message-btn" onClick={showModal} >
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
