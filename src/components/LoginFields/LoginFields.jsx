import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import InputFieldModule from "../InputFieldModule/InputFieldModule";
import UserIcon from "../../assets/userIcon.svg";
import PasswordIcon from "../../assets/passwordIcon.svg";

const EmailAndPasswordFields = () => {
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [isAuth, setIsAuth] = useState(false);
  const pageNavigation = useNavigate();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("userAuthData")) || null;
    const isAuthLocal = localData?.isAuth;
    setIsAuth(isAuthLocal);
    isAuth && pageNavigation("../home");
  }, [isAuth]);

  async function loginAccount() {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      onAuthStateChanged(auth, currentUser => {
        setIsAuth(true);
        localStorage.setItem(
          "userAuthData",
          JSON.stringify({ isAuth: true, uid: currentUser?.uid })
        );
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
