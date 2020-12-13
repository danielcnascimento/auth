import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MessageSubjectReader = () => {

  const params = useParams();

  const [message, setMessage] = React.useState({});

  
  React.useEffect(() => {
    axios.get(`http://localhost:5000/usuario/${params.id}`).then((resp) => {
      console.log(resp);  
      setMessage(resp);

    });
  },[params.id]);

  console.log(message.data)

  return (
    <>
      {!params.id || !message.data ? (
        <h1>Carregando mensagem...</h1>
      ) : (
        <div key={message.data.id}>
          <h1>
            {message.data.firstName} {message.data.lastName}
          </h1>
          <p>From: {message.data.email}</p>
          <p>Subject: {message.data.subject}</p>
          <p>Message.data: {message.data.message} </p>
        </div>
      )} 
    </>
  );
};

export default MessageSubjectReader;
