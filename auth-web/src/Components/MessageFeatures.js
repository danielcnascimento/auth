import React from 'react';
// import axios from "axios";
// import { useParams } from "react-router-dom";

import {FiTrash2, FiEdit3} from 'react-icons/fi';

import '../style/components-features.css';

const MessageFeatures = () => {

    //const params = useParams();

    return (
      <div className="features-container">
        <div className="features-item-delete">
          <FiTrash2 className="item" size={28} color="#fff" />
        </div>
        <div className="features-item-update">
          <FiEdit3 className="item" size={28} color="#fff" />
        </div>
      </div>
    );
}

export default MessageFeatures
