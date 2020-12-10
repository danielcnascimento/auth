import React from "react";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

// pode exportar diversos botões para controle de modal de : delete, update e create.

const MessageCommit = () => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <p>Conteúdo do meu modal...</p>
      <button onClick={hideModal}>Fechar</button>
    </ReactModal>
  ));

  return <button onClick={showModal}>Abrir modal</button>;
};

export default MessageCommit;
