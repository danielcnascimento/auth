import React from 'react';
import axios from 'axios';
import MessageUpdate from './MessageUpdate';

import {ModalProvider} from 'react-modal-hook';

import {useParams} from "react-router-dom";

import {FiTrash2} from 'react-icons/fi';
import '../style/components-features.css';

const MessageFeatures = () => {

    const params = useParams();   
    
    async function handleDelete() {
      console.log(params.id)
      await axios.delete(`http://localhost:5000/usuario/${params.id}`).then(res => console.log(res))
  }


    
    return (
      <>
        {!params.id ? (
          <div></div>
        ) : (
          <div className="features-container">
            <div className="features-item-delete" onClick={handleDelete} >
              <FiTrash2 className="item" size={28} color="#fff" />
            </div>
             <ModalProvider >
              <MessageUpdate/>
            </ModalProvider> 
          </div>
        )}
      </>
    );
}

export default MessageFeatures
