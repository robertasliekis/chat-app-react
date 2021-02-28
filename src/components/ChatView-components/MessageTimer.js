import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function MessageTimer({ messageData, activeUser, onMessageTimerChange, messageIndex }) {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time >= 1) {
      let timer = setTimeout(() => {
        let currentTime = time;
        setTime(currentTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (time === 0) {
      hideMessageFromActiveUser();
    }
  });

  const hideMessageFromActiveUser = () => {
    let displayMessage = messageData[2];
    displayMessage.forEach((user, index) => {
      let userId = user[0];
      if (activeUser.id === userId) {
        let updatedMessage = messageData;
        updatedMessage[2][index][1] = false;
        onMessageTimerChange(updatedMessage, messageIndex);
      }
    });
  };

  return <div className="message-timer">{`00:${time >= 10 ? "" : "0"}${time}`}</div>;
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.setActiveUser.activeUser
  };
};

export default connect(mapStateToProps, null)(MessageTimer);
