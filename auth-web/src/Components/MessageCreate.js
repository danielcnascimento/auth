import React from "react";
import { RiMailAddLine } from "react-icons/ri";
import "../style/components-message-create.css";
import Modal from './MessageCommit';

// Daniel, refatora esse estilo, refatora tudo, matem um componente exportando botão de Adicionar, Deletar e Alterar o modelo
// o Componente MessageCommit pode retonar os 3 botões já com modal fazendo essas operações.

const MessageCreate = () => {
  return (
    <div className="create-message">
      <div className="create-item">
        <div>
          <RiMailAddLine size={27} color="#fff" />
        </div>
        {/*<div>
          <Modal />  modal do MessageCommit.js 
        </div>*/}
        <div>Escrever</div>
      </div>
    </div>
  );
};

export default MessageCreate;
