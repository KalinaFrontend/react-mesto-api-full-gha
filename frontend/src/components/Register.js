import React from "react";
import AuthForm from "./AuthForm";


function Register({ onLogin }) {
  const title = "Регистрация";
  return (
    <AuthForm title={title} onLogin={onLogin}/>
  );
}

export default Register;