import React from "react";
import AuthForm from "./AuthForm";


function Login({ onLogin }) {
  const title = "Вход";
  const buttonSubmit = "Войти";
  return (
    <AuthForm title={title} button={buttonSubmit} onLogin={onLogin} />
  );
}

export default Login;
