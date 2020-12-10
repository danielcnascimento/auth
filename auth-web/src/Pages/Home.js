import React from "react";
import "../style/pages-home.css";
import { ModalProvider } from "react-modal-hook";

import Messages from "../Components/Messages";
import MessageSubjectReader from "../Components/MessageSubjectReader";
import MessageFeatures from "../Components/MessageFeatures";
import MessageCreate from "../Components/MessageCreate";

const Home = () => {
  return (
    <div className="container">
      <header>Home page</header>
      <aside className="aside">
        <Messages />
      </aside>
      <div className="feature">
        <MessageFeatures />
      </div>
      <ModalProvider>
        <div className="subject-target">
          My subject target:
          <div className="subject">
            <MessageSubjectReader />
          </div>
        </div>
        <div className="add-feature">
          <MessageCreate /> {/*pode ser substituido por message commit */}
        </div>
      </ModalProvider>
    </div>
  );
};

export default Home;
