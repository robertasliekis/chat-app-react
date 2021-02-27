import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import LoginView from "./components/LoginView";
import ChatView from "./components/ChatView";
import ProfileView from "./components/ProfileView";

import { setBrowserName } from "./actions";

//"homepage":"http://robertasliekis.github.io/chat-app-react/",

function App({ browserName, setBrowserName }) {
  useEffect(() => {
    getBrowserName();
  });

  const getBrowserName = () => {
    let browserName = "";
    if (navigator.vendor.match(/google/i)) {
      browserName = "chrome/blink";
    } else if (navigator.vendor.match(/apple/i)) {
      browserName = "safari/webkit";
    } else if (navigator.userAgent.match(/firefox\//i)) {
      browserName = "firefox/gecko";
    } else if (navigator.userAgent.match(/edge\//i)) {
      browserName = "edge/edgehtml";
    } else if (navigator.userAgent.match(/trident\//i)) {
      browserName = "ie/trident";
    } else {
      browserName = navigator.userAgent + "\n" + navigator.vendor;
    }
    setBrowserName(browserName);
  };

  return (
    <div className="app-wrapper">
      <div className={`app-container ${browserName !== "safari/webkit" ? "container-size" : ""}`}>
        <LoginView />
        <ChatView />
        <ProfileView />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    browserName: state.setBrowserName.browserName
  };
};

const mapDispatchToProps = {
  setBrowserName
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
