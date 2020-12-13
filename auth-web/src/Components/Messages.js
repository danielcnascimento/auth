import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import '../style/components-messages.css';

const Messages = () => {
  const [persons, setPersons] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/usuarios").then((rows) => {
      console.log(rows);
      setPersons(rows.data)
    });
  }, []);

  const { users } = persons;

  return (
    <div>
      {users === undefined ? (
        <p>Carregando... </p>
      ) : (
        users.map((person) => {
          return (
            <Link to={`/usuario/${person.id}`} key={person.id} style={{textDecoration: 'none'}} >
              <div className="message-card">
                <div className="message-body">
                  <h3> <strong>{person.firstName}</strong> | from: {person.email}</h3>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Messages;
