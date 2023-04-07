import { createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState } from "react";
import { auth } from "../../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container mt-5">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <div className="mt-5">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        </div>
        <div className="mt-5 ">
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        </div>
        <button type="submit" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mt-5">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;