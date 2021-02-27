import React from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

import { setActiveUser, setProfileViewOpen, setChatData } from "../../actions";

function UserPanel({ activeUser, setActiveUser, setProfileViewOpen, setChatData }) {
  return (
    <div className="user-panel-container">
      <div className="container">
        <div className="profile-image" style={{ backgroundImage: `url("${activeUser.profileImageUrl}")` }}></div>
        <button className="btn btn-edit-profile" onClick={() => setProfileViewOpen()}>
          <FontAwesomeIcon icon={faUserEdit} className="icon" />
          <div className="btn-text">Profile</div>
        </button>
        <button
          className="btn btn-sign-out"
          onClick={() => {
            setActiveUser("");
            setChatData("");
          }}
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
          <div className="btn-text">Sign out</div>
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activeUser: state.setActiveUser.activeUser
  };
};

const mapDispatchToProps = {
  setActiveUser,
  setProfileViewOpen,
  setChatData
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
