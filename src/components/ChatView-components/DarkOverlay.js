import React from "react";
import { connect } from "react-redux";

import { setNewChatWindowOpen } from "../../actions";

function DarkOverlay({ setNewChatWindowOpen, newChatWindowOpen }) {
  return (
    <div
      className="dark-overlay-container"
      style={{ display: newChatWindowOpen ? "flex" : "none" }}
      onClick={() => setNewChatWindowOpen()}
    ></div>
  );
}

const mapStateToProps = (state) => {
  return {
    newChatWindowOpen: state.setNewChatWindowOpen.newChatWindowOpen
  };
};

const mapDispatchToProps = {
  setNewChatWindowOpen
};

export default connect(mapStateToProps, mapDispatchToProps)(DarkOverlay);
