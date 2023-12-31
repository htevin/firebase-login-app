import React, { useState } from "react";
import './RegisterLogin.css'
import { database } from "../firebase/init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function RegisterLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(type === 'signup'){
        createUserWithEmailAndPassword(database, email, password).then((data) => {
            console.log(data, "authData");
            history("/home");
          }).catch(err => {
            alert(err.code)
            setLogin(true)
          })
    } else {
        signInWithEmailAndPassword(database, email, password).then((data) => {
            console.log(data, "authData");
            history("/home");
          }).catch(err => {
            alert(err.code)
          })
    }

    
  };

  return (
    <div className="App">
        <div className="row">
            <div className={login == false ? 'activeColor' : 'pointer'} onClick={() => setLogin(false)} >SignUp</div>
            <div className={login == true ? 'activeColor' : 'pointer'} onClick={() => setLogin(true)}>SignIn</div>
        </div>
      <h1>{login ? 'SingIn' : 'SingUp'}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
        <input name="email" type="email" placeholder="Email" />
        <br />
        <input name="password" type="password" placeholder="Password" />
        <br />
        <button>{login ? 'SingIn' : 'SingUp' }</button>
      </form>
    </div>
  );
}
