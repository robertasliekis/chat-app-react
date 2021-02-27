import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setActiveUser, setProfileViewOpen } from "../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ProfileView({ users, activeUser, profileViewOpen, setActiveUser, setProfileViewOpen }) {
  const { register, handleSubmit, errors } = useForm();
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [imageExists, setImageExists] = useState(true);
  const [emailExists, setEmailExists] = useState(false);

  useEffect(() => {
    setImageUrlInput(activeUser.profileImageUrl);
  }, [profileViewOpen]);

  const [emailInput, setEmailInput] = useState("");

  const checkIfImageExist = (url) => {
    if (url !== "") {
      let image = new Image();
      image.onload = function () {
        if (this.width > 0) {
          setImageExists(true);
        }
      };
      image.onerror = function () {
        setImageExists(false);
      };
      image.src = url;
    }
  };

  checkIfImageExist(imageUrlInput);

  const checkEmailDuplicate = (inputEmail) => {
    let sameEmail = false;
    users.forEach((user) => {
      if (activeUser.id !== user.id) {
        if (inputEmail !== user.email) {
        } else {
          sameEmail = true;
        }
      }
    });
    if (sameEmail) {
      setEmailExists(true);
    } else {
      setEmailExists(false);
    }
  };

  const onSubmit = (inputData) => {
    checkEmailDuplicate(inputData.email);
    if (!emailExists && (imageExists || inputData.profileImageUrl === "")) {
      if (inputData.profileImageUrl === "") {
        inputData.profileImageUrl = "./images/user.png";
      }
      setActiveUser(inputData);
    }
  };

  function update(event) {
    setEmailInput(event.target.value);
  }

  if (profileViewOpen)
    return (
      <div className="profile-view-container" key={activeUser}>
        <form className="profile-form form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="form-main-heading">
            <button className="btn btn-back" onClick={() => setProfileViewOpen()}>
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            </button>
            EDIT PROFILE
          </h1>
          <div className="profile-info-container">
            <div className="profile-image" style={{ backgroundImage: `url("${activeUser.profileImageUrl}")` }}></div>
            <div className="profile-info">
              <div className="names-container">
                <div className="first-name">{activeUser.firstName}</div>
                <div className="second-name">{activeUser.secondName}</div>
              </div>
            </div>
          </div>
          <div className="form-input">
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                defaultValue={activeUser.email}
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
            </div>
            <div className="error-message">{errors.email && !emailExists ? errors.email.message : ""}</div>
            <div className="error-message error-message-email-exist">{emailExists ? "*User with same email exists" : ""}</div>
          </div>
          <div className="form-input">
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                defaultValue={activeUser.password}
                type="password"
                placeholder="Password"
                name="password"
                ref={register({ required: "*Password is required" })}
              />
            </div>
            <div className="error-message">{errors.password && <p>{errors.password.message}</p>}</div>
          </div>
          <div className="form-input">
            <div className="input-field">
              <label htmlFor="firstname">First name</label>
              <input
                defaultValue={activeUser.firstName}
                type="text"
                placeholder="First name"
                name="firstName"
                ref={register({ required: "*First name is required" })}
              />
            </div>
            <div className="error-message">{errors.firstname && <p>{errors.firstname.message}</p>}</div>
          </div>
          <div className="form-input">
            <div className="input-field">
              <label htmlFor="secondname">Second name</label>
              <input
                defaultValue={activeUser.secondName}
                type="text"
                placeholder="Second name"
                name="secondName"
                ref={register({ required: "*Second name is required" })}
              />
            </div>
            <div className="error-message">{errors.secondname && <p>{errors.secondname.message}</p>}</div>
          </div>
          <div className="form-input">
            <div className="input-field">
              <label htmlFor="profileImageUrl">Profile image</label>
              <input
                defaultValue={activeUser.profileImageUrl}
                type="text"
                placeholder="Profile image url"
                name="profileImageUrl"
                ref={register()}
                onChange={(e) => setImageUrlInput(e.target.value)}
              />
            </div>
            <div className="error-message">{imageExists || imageUrlInput === "" ? "" : "Image does not exist"}</div>
          </div>
          <div className="form-input">
            <div className="input-field">
              <label htmlFor="city">City</label>
              <input defaultValue={activeUser.city} type="text" placeholder="City" name="city" ref={register()} />
            </div>
            <div className="error-message">{errors.city && <p>{errors.city.message}</p>}</div>
          </div>
          <div className="form-input form-input-about">
            <div className="input-field">
              <label htmlFor="about">Biography</label>
              <textarea defaultValue={activeUser.about} type="text" placeholder="About me" name="about" ref={register()} />
            </div>
            <div className="error-message">{errors.about && <p>{errors.about.message}</p>}</div>
          </div>
          <div className="buttons-container">
            <button className="btn-wide btn-cancel" onClick={() => setProfileViewOpen()}>
              Close
            </button>
            <button className="btn-wide btn-submit" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    );
  else return null;
}
const mapStateToProps = (state) => {
  return {
    users: state.setUsersData.users,
    chats: state.setChatData.chats,
    activeUser: state.setActiveUser.activeUser,
    profileViewOpen: state.setProfileViewOpen.profileViewOpen
  };
};

const mapDispatchToProps = {
  setActiveUser,
  setProfileViewOpen
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
