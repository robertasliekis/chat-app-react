import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setActiveUser } from "../actions";

function LoginView({ users, setActiveUser, activeUser }) {
  const { register, handleSubmit, errors } = useForm();

  const [incorrectLogin, setIncorrectLogin] = useState(false);

  const [emailInput, setEmailInput] = useState("");

  const checkUserEmailAndPassword = (inputData) => {
    let userExist = false;
    users.forEach((user, index) => {
      if (user.email === inputData.email && user.password === inputData.password) {
        userExist = true;
        setActiveUser(user);
      }
    });
    if (userExist) {
      setIncorrectLogin(false);
    } else {
      setIncorrectLogin(true);
    }
  };

  const update = (event) => {
    setEmailInput(event.target.value);
  };

  const onSubmit = (inputData) => {
    checkUserEmailAndPassword(inputData);
  };

  if (activeUser === "")
    return (
      <div className="login-view-container">
        <form className="login-form form" onSubmit={handleSubmit(onSubmit)}>
          <div className="logo">
            <FontAwesomeIcon icon={faComments} className="icon icon-top" />
            <h1 className="form-main-heading">Chat App</h1>
          </div>
          <div className="form-input">
            <div>
              <div className="input-field">
                <input
                  onChange={update}
                  name="email"
                  placeholder="Email"
                  ref={register({
                    required: "*Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "*Invalid email address"
                    }
                  })}
                />
                <FontAwesomeIcon icon={faLock} className="icon" />
              </div>
            </div>
            <div className="error-message">{errors.email && errors.email.message}</div>
          </div>
          <div className="form-input">
            <div className="input-field">
              <input type="password" placeholder="Password" name="password" ref={register({ required: "*Password is required" })} />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            <div className="error-message">{errors.password && <p>{errors.password.message}</p>}</div>
            <div className="error-message error-message-incorrect-input" style={{ opacity: incorrectLogin ? 1 : 0 }}>
              *Incorrect email or password
            </div>
          </div>
          <button className="btn-wide btn-submit" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  else return null;
}

const mapStateToProps = (state) => {
  return {
    users: state.setUsersData.users,
    activeUser: state.setActiveUser.activeUser
  };
};

const mapDispatchToProps = {
  setActiveUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
