import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container mt-5">
      <form onSubmit={signIn}>
        <h1>SignIn to your account</h1>
        <div>
          <input
            id="login_acc"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control border-0 mt-4 rounded-pill"
            type="text"
            placeholder="Account no"
          />
        </div>
        <div>
          {signinForm.get("email")?.errors && signinForm.get("email")?.touched && (
            <div style={{ color: "red", textAlign: "left" }}>
              Invalid Account no
            </div>
          )}
        </div>
        <div>
          <input
            id="login_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control border-0 rounded-pill mt-3"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          {SignInForm.get("pswd")?.errors && SignInForm.get("pswd")?.touched && (
            <div style={{ color: "red", textAlign: "left" }}>
              Invalid Password
            </div>
          )}
        </div>
        <button
          type="submit"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mt-5"
        >
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SignIn;