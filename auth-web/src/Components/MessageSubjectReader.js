import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MessageSubjectReader = () => {
  const [message, setMessage] = React.useState({});

  const params = useParams();

  console.log(params.id);

  React.useEffect(() => {
    axios.get(`http://localhost:5000/usuario/${params.id}`).then((resp) => {
      console.log(resp.data);
      setMessage(resp.data);
    });
  }, [params.id]);

  console.log(message);

  return (
    <>
      { !params.id ? (
        <h1>Carregando mensagem...</h1>
      ) : (
        <div key={message.id}>
          <h1>
            {message.firstName} {message.lastName}
          </h1>
          <p>From: {message.email}</p>
          <p>Subject: {message.subject}</p>
          <p>Message: {message.message} </p>
        </div>
      )}
    </>
  );
};

export default MessageSubjectReader;
