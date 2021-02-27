import React from "react";
import "./App.css";

import LoginView from "./components/LoginView";
import ChatView from "./components/ChatView";
import ProfileView from "./components/ProfileView";

//"homepage":"http://robertasliekis.github.io/chat-app-react/",

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <LoginView />
        <ChatView />
        <ProfileView />
      </div>
    </div>
  );
}

export default App;
