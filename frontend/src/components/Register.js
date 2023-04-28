import React from "react";
import AuthForm from "./AuthForm";


function Register({ onLogin }) {
  const title = "Регистрация";
  const buttonSubmit = "Зарегистрироваться";
  return (
    <AuthForm title={title} button={buttonSubmit} onLogin={onLogin}/>
  );
}

export default Register;