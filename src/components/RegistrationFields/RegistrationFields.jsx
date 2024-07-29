import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase.config";
import InputFieldModule from "../InputFieldModule/InputFieldModule";
import UserIcon from "../../assets/userIcon.svg";
import PasswordIcon from "../../assets/passwordIcon.svg";
import EmailIcon from "../../assets/emailIcon.svg";
import setAuthCookies from "../helpers/setAuthCookies";

const RegistrationFields = () => {
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState();
  const [registerFirstName, setRegisterFirstName] = useState();
  const [registerLastName, setRegisterLastName] = useState();
  const usersDataCollectionRef = collection(db, "usersDataCollection");
  const pageNavigation = useNavigate();

  async function registerAccount() {
    try {
      if (registerPassword === registerConfirmPassword) {
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
      } else {
        return alert("Passwords are different!");
      }

      onAuthStateChanged(auth, currentUser => {
        setAuthCookies({ isAuth: true, uid: currentUser.uid });
        addDoc(usersDataCollectionRef, {
          userFirstName: registerFirstName,
          userLastName: registerLastName,
          uid: currentUser?.uid,
        });
      });
      pageNavigation("../home");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="register-inputs">
        <InputFieldModule
          placeholder="First Name"
          image={UserIcon}
          type={"text"}
          onChange={e => setRegisterFirstName(e.target.value)}
        />
        <InputFieldModule
          placeholder="Last Name"
          image={UserIcon}
          type={"text"}
          onChange={e => setRegisterLastName(e.target.value)}
        />
        <InputFieldModule
          placeholder="Email"
          image={EmailIcon}
          type={"text"}
          onChange={e => setRegisterEmail(e.target.value)}
        />
        <InputFieldModule
          placeholder="Password"
          image={PasswordIcon}
          type={"password"}
          onChange={e => setRegisterPassword(e.target.value)}
        />
        <InputFieldModule
          placeholder="Confirm Password"
          image={PasswordIcon}
          type={"password"}
          onChange={e => setRegisterConfirmPassword(e.target.value)}
        />
      </div>

      <div className="register-signup">
        <button className="register-signup-btn" onClick={registerAccount}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default RegistrationFields;
