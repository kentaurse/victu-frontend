import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import InputFieldModule from "../InputFieldModule/InputFieldModule";

import UserIcon from "../../assets/userIcon.svg";
import PasswordIcon from "../../assets/passwordIcon.svg";

import setAuthCookies from "../helpers/setAuthCookies";

const EmailAndPasswordFields = () => {
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const pageNavigation = useNavigate();

  async function loginAccount() {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      onAuthStateChanged(auth, currentUser => {
        setAuthCookies({ isAuth: true, uid: currentUser.uid });
        pageNavigation("../home");
      });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="login-main">
      <div className="login-inputs">
        <InputFieldModule
          placeholder="Email"
          image={UserIcon}
          type={"text"}
          onChange={e => setLoginEmail(e.target.value)}
        />
        <InputFieldModule
          placeholder="Password"
          image={PasswordIcon}
          type={"password"}
          onChange={e => setLoginPassword(e.target.value)}
        />
      </div>
      <button onClick={loginAccount} className="login-signin">
        Sign In
      </button>
    </div>
  );
};

export default EmailAndPasswordFields;
